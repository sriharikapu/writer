import { Container } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './logo.svg'

const StyledFooter = styled.footer`
  background: transparent;
  color: white;
  font-family: AvenirNext-Bold, sans-serif;
  font-size: 20px;
  padding: 80px 0 100px 0;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const FooterLogo = styled.img.attrs({
  src: logo,
  alt: 'ohmyDefi!'
})`
  width: 100%;
  max-width: 145px;
`

export default function Footer () {
  return (
    <StyledFooter>
      <Container>
        <Link to='/'>
          <FooterLogo />
        </Link>

        <p>
          Need help? - <a href='mailto:support@ohmydefi.com'>support@ohmydefi.com</a>
        </p>

      </Container>
    </StyledFooter>
  )
}
