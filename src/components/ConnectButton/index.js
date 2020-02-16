import React from 'react'
import PropTypes from 'prop-types'
import Jazzicon from 'react-jazzicon'
import jsNumberForAddress from 'react-jazzicon/lib/jsNumberForAddress'
import beautyAddress from './beautyAddress.js'
import styled from 'styled-components'

const StyledAddressButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StyledAccountLine = styled.div`
  padding-left: 6px;
`

const StyledWalletButton = styled.button`
  background-color: #2a323e;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 0.8px;
  opacity: 0.8;
  display: flex;

  &:hover {
    opacity: 1;
    text-decoration: none;
    border-bottom: 2px solid white;
    cursor: pointer;
  }
`

const redirectEtherscan = currentAddress => {
  if (!currentAddress) return
  window.open('https://etherscan.io/address/' + currentAddress, '_blank')
}

const ConnectButton = props => (
  <StyledWalletButton onClick={() => redirectEtherscan(props.account)}>
    {props.account ? (
      <AddressButton account={props.account} diameter={props.diameter} />
    ) : (
      <div>Connect</div>
    )}
  </StyledWalletButton>
)

const AddressButton = props => (
  <StyledAddressButton>
    <Jazzicon
      diameter={props.diameter}
      seed={jsNumberForAddress(props.account)}
    />
    <StyledAccountLine>{beautyAddress(props.account)}</StyledAccountLine>
  </StyledAddressButton>
)

AddressButton.propTypes = {
  diameter: PropTypes.number,
  account: PropTypes.string
}

AddressButton.defaultProps = {
  diameter: 30
}

export default ConnectButton
