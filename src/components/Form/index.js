import styled from 'styled-components'

const Form = styled.form`
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: -0.84px;
  line-height: 26px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  
  .form-actions {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  
  input {
    background: transparent;
    border: 0;
    outline: 0;
    color: inherit;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance:textfield;
  }
  
  .rc-input-number {
    display: inline-block;
    width: 50px;
  }
  
  .text-blue, .text-green, .text-red {
    font-weight: bold;
  }
`

export default Form
