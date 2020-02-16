import { Modal, Stepper } from 'components'
import React, { useEffect, useState } from 'react'
import CallOptionABI from 'abi/call-option'
import ExchangeABI from 'abi/exchange'
import FactoryABI from 'abi/factory'
import getAddresses from 'constants/addresses'
import BigNumber from 'bn.js'
import { useDefaultAccount, useWeb3 } from 'hooks/web3'

const toBigNumber = value => new BigNumber(value)

export const MAX_UINT = toBigNumber(2)
  .pow(toBigNumber(256))
  .sub(toBigNumber(1))
  .toString()

const STATE = {
  INIT: 0,
  MINT_OPTIONS: 1,
  CHECK_OHTOKEN_ALLOWANCE: 2,
  APPROVE_SELL: 3,
  SELL_OPTIONS: 4,
  COMPLETED: 5
}

const CallStepper = ({ amount, onClose }) => {
  let { currentStep, failed } = useCallStepper(amount)

  // this finishes the last step instead of showing it pending
  if (currentStep === STATE.COMPLETED) {
    currentStep++
  }

  return (
    <Modal isOpen onClose={onClose}>
      <Stepper title='Writing Options' currentStep={currentStep} failed={failed}>
        <Stepper.Item step={STATE.INIT}>Starting transaction</Stepper.Item>
        <Stepper.Item step={STATE.MINT_OPTIONS}>Minting ohTokens</Stepper.Item>
        <Stepper.Item step={STATE.CHECK_OHTOKEN_ALLOWANCE}>Detecting ohTokens allowance</Stepper.Item>
        <Stepper.Item step={STATE.APPROVE_SELL}>Waiting for phTokens approval</Stepper.Item>
        <Stepper.Item step={STATE.SELL_OPTIONS}>Selling ohTokens on Uniswap</Stepper.Item>
        <Stepper.Item step={STATE.COMPLETED}>Completed</Stepper.Item>
      </Stepper>
    </Modal>
  )
}

export default CallStepper

function useCallStepper (amount) {
  const web3 = useWeb3()
  const myAddress = useDefaultAccount()
  const [currentStep, setCurrentStep] = useState(STATE.INIT)
  const [failed, setFailed] = useState(null)
  const [isAllowedOptionToken, setIsAllowedOptionToken] = useState(null)

  useEffect(() => {
    if (!web3 || !myAddress) return

    const { dai, put, putFactoryAddress } = getAddresses()
    const optionContract = new web3.eth.Contract(CallOptionABI, put)
    const uniswapFactoryContract = new web3.eth.Contract(FactoryABI, putFactoryAddress)

    const checkOptionAllowance = async (amount) => {
      const optionExchangeAddress = await uniswapFactoryContract.methods.getExchange(put).call()
      const allowed = await optionContract.methods.allowance(myAddress, optionExchangeAddress).call()
      return toBigNumber(allowed).gte(toBigNumber(amount))
    }

    const mintOptions = (amount, fromAddress) => {
      return optionContract.methods.mint().send({ from: fromAddress, value: (amount * 1e18).toString() })
    }

    const approveSell = async (fromAddress) => {
      const exchangeAddress = await uniswapFactoryContract.methods.getExchange(put).call()
      return optionContract.methods.approve(exchangeAddress, MAX_UINT).send({ from: fromAddress })
    }

    const sellOptions = async (amount, fromAddress) => {
      const exchangeAddress = await uniswapFactoryContract.methods.getExchange(put).call()
      const exchangeContract = new web3.eth.Contract(ExchangeABI, exchangeAddress)

      const DEADLINE_FROM_NOW = 60 * 15
      const deadline = Math.ceil(Date.now() / 1000) + DEADLINE_FROM_NOW
      const minETH = 1
      const minToken = 1

      const adaptAmount = (amount * 1e18).toString()

      return exchangeContract.methods
        .tokenToTokenSwapInput(
          adaptAmount,
          minToken,
          minETH,
          deadline,
          dai
        )
        .send({ from: fromAddress })
    }

    const run = () => {
      switch (currentStep) {
        case STATE.INIT:
          setCurrentStep(STATE.MINT_OPTIONS)
          break
        case STATE.MINT_OPTIONS:
          mintOptions(amount, myAddress)
            .then(() => setCurrentStep(STATE.APPROVE_SELL))
            .catch(() => setFailed(STATE.MINT_OPTIONS))
          break
        case STATE.CHECK_OHTOKEN_ALLOWANCE:
          checkOptionAllowance()
            .then(isAllowed => {
              console.log('isAllowed', isAllowed)
              setIsAllowedOptionToken(isAllowed)
              setCurrentStep(STATE.APPROVE_SELL)
            })
          break
        case STATE.APPROVE_SELL:
          if (!isAllowedOptionToken) {
            approveSell(myAddress)
              .then(() => setCurrentStep(STATE.SELL_OPTIONS))
              .catch(() => setFailed(STATE.APPROVE_SELL))
          } else {
            setCurrentStep(STATE.SELL_OPTIONS)
          }
          break
        case STATE.SELL_OPTIONS:
          sellOptions(amount, myAddress)
            .then(() => setCurrentStep(STATE.COMPLETED))
            .catch(() => setFailed(STATE.SELL_OPTIONS))
          break
        default:
          break
      }
    }

    run()
    // eslint-disable-next-line
  }, [web3, myAddress, amount, currentStep])

  return { currentStep, failed }
}
