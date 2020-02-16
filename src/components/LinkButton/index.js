import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { color } from 'theme'

const LinkButton = styled(Link)`
  font-family: AvenirNext-Regular, sans-serif;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  text-transform: capitalize;
  letter-spacing: -0.84px;
  padding: 6px 34px;
  text-decoration: none;
  transition: 200ms;
  outline: 0;
  color: white;
  display: inline-block;
  background-color: ${color.purple1};
  user-select: none;
  
  ${props => props.kind === 'green' ? css`
    color: black;
    background-color: ${color.green1};
  ` : ''}
  
  ${props => props.kind === 'pink' ? css`
    background-color: ${color.pink1};
  ` : ''}
  
  &:hover:not(:disabled) {
    cursor: pointer;
    transform: scale(1.08) translateY(-2px);
  }
  
  &:disabled {
    filter: brightness(.7);
  }
`

export default LinkButton
