import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'

export const Web3Context = createContext(undefined)

export function useWeb3Provider (lazy = false) {
  const [web3, setWeb3] = useState(null)
  const enableMetamask = useCallback(() => enableWeb3().then(setWeb3), [])
  const enableFortmatic = useCallback(() => enableFortmaticPropmt().then(setWeb3), [])

  if (web3 && window.ethereum) console.log('Metamask')

  useEffect(() => {
    if (!lazy) {
      enableMetamask()
    }
  }, [lazy, enableMetamask])

  return { web3, enableMetamask, enableFortmatic }
}

export async function enableWeb3 () {
  const { ethereum } = window

  if (ethereum) {
    await ethereum.enable()

    ethereum.autoRefreshOnNetworkChange = false
    ethereum.on('networkChanged', () => {
      document.location.reload()
    })

    const web3 = new Web3(ethereum)
    return web3
  }
}

export async function enableFortmaticPropmt () {
  const fm = new Fortmatic(process.env.REACT_APP_FORTMATIC_KEY)
  const web3 = new Web3(fm.getProvider())

  await fm.user.login()
  return web3
}

export function useWeb3 () {
  return useContext(Web3Context)
}

export function useDefaultAccount () {
  const web3 = useWeb3()
  const [account, setAccount] = useState()

  useEffect(() => {
    if (web3) {
      web3.eth.getAccounts().then(([account]) => setAccount(account))
    }
  }, [web3])

  return account
}

export function getNetworkVersion () {
  const { ethereum } = window

  if (ethereum) {
    return ethereum.networkVersion
  }
}
