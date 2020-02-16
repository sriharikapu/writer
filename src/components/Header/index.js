import React from 'react'
import styled from 'styled-components'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import logo from './img/option-trade.svg'
import { color } from 'theme'

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
    border: 1px solid #D8D8D8;
    border-radius: 10px;
    color: #D8D8D8;
    cursor: pointer;
    font-size: 20px;
    padding: 7px 18px;
    outline: 0;
  }
`

export default function Header () {
  return (
    <StyledHeader>
      <Container>
        <Link to='/'>
          <img src={logo} alt='ohmyDefi' />
        </Link>

        <button>Connect wallet</button>
      </Container>
    </StyledHeader>
  )
}
