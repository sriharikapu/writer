import React from 'react'
import styled, { css } from 'styled-components'
import { color } from 'theme'
import building from './building.png'
import hedging from './hedging.png'
import writing from './writing.png'

const images = {
  building,
  hedging,
  writing
}

const StyledCard = styled.div`
  color: white;
  font-family: AvenirNext-Regular, sans-serif;
  font-size: 20px;
  font-weight: lighter;
  background-color: #2D2D2D;
  border-radius: 35px;
  transition: 200ms ease-in;
  width: 100%;
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }
  
  p {
    min-height: 100px;
    padding: 0 30px;
  }
  
  img {
    margin: 100px 20px 80px 20px;
    max-width: 100%;
    object-fit: scale-down;
  }
  
  span {
    color: white;
    font-family: AvenirNext-Bold, sans-serif;
    font-size: 35px;
    text-transform: capitalize;
    text-align: center;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
    ${props => props.kind === 'building' ? css`
       background: ${color.blue1};
    ` : ''}
    ${props => props.kind === 'writing' ? css`
       background: ${color.purple1};
    ` : ''}
    ${props => props.kind === 'hedging' ? css`
       background: ${color.pink1};
    ` : ''}
  }
  
  &:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(1.05);
  }
`

export default function ProductCard ({ kind, children, link }) {
  return (
    <StyledCard kind={kind}>
      <a href={link}>
        <img src={images[kind]} alt={kind} />
        <p>{children}</p>
        <span>See more</span>
      </a>
    </StyledCard>
  )
}
