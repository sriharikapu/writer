import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import logo from './img/option-trade.svg'

import FortmaticLogo from './img/fortmatic-icon.svg'
import MetamaskLogo from './img/metamask-icon.svg'
import { color } from 'theme'
import Modal from '../Modal'
import ConnectButton from '../ConnectButton'

import { useDefaultAccount } from '../../hooks/web3'

const StyledHeader = styled.header`
  background-color: ${color.black1};
  img {
    max-width: 154px;
    display: inline-block;
  }

  h1 {
    color: ${color.background};
    display: inline-block;
    font-size: 16px;
    font-weight: lighter;
    margin: 0 10px;
  }
 
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
    user-select: none;
  }
 
  a {
    display: flex;
    width: 200px;
  }

  button {
    background-color: transparent;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    color: #d8d8d8;
    cursor: pointer;
    font-size: 20px;
    padding: 7px 18px;
    outline: 0;
  }
`

const StyledFirstContainer = styled.div`
  color: white;
  display: flex;
  font-family: Roboto Mono;
  font-size: 14px;
`

const StyledButtonsContainer = styled.div`
  background-color: #3b3b3b;
  display: flex;
  flex-direction: row;
  font-family: Roboto Mono;
  font-size: 14px;
  margin: auto;
  padding: 5px;
  border-radius: 20px;
  width: 50%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 300px;
  min-width: 300px;
`

export default function Header ({ onEnable }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const account = useDefaultAccount()

  return (
    <StyledHeader>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <StyledModalContainer>
          <div style={{ textAlign: 'center' }}>Select your wallet:</div>
          <div>
            <StyledButtonsContainer
              onClick={() => {
                onEnable('metamask')
                setIsModalOpen(false)
              }}
            >
              <img
                style={{ width: '40px', height: '40px', marginRight: '8px' }}
                src={MetamaskLogo}
                alt='Metamask'
              />
              <div>Metamask</div>
            </StyledButtonsContainer>
            <StyledButtonsContainer
              onClick={() => {
                onEnable('fortmatic')
                setIsModalOpen(false)
              }}
            >
              <img
                style={{ width: '40px', height: '40px', marginRight: '8px' }}
                src={FortmaticLogo}
                alt='Fortmatic'
              />
              <div>Fortmatic</div>
            </StyledButtonsContainer>
          </div>
        </StyledModalContainer>
      </Modal>
      <Container>
        <StyledFirstContainer>
          <Link to='/'>
            <img src={logo} alt='ohmyDefi' />
          </Link>
          <div style={{ paddingTop: '5px' }}>Mainnet</div>
        </StyledFirstContainer>
        {account ? (
          <ConnectButton account={account} />
        ) : (
          <button onClick={() => setIsModalOpen(true)}>Connect</button>
        )}
      </Container>
    </StyledHeader>
  )
}
