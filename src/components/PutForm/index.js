import { Button } from 'components/index'
import React, { useState } from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import numeral from 'numeral'

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

const FormSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  & > * {
    margin: 8px 5px;
    &:first-child {
      text-align: right;
    }
    
    &:last-child {
      text-align: left;
    }
  }
`

export default function PutForm () {
  const [amount, setAmount] = useState(0)

  return (
    <Form>
      <FormSection>
        <p>I agree to lock</p>
        <div className='text-blue'>
          <InputMask
            type='tel'
            value={amount}
            onChange={event => {
              const value = numeral(event.target.value).format('0.00')
              setAmount(parseFloat(value))
            }}
            mask='9.99 ETH'
            maskChar='0'
          />
        </div>
      </FormSection>
      <FormSection>
        <p>committing to sell it for</p>
        <div className='text-green'>
          {numeral(270 * amount).format('0.00')} DAI
        </div>
      </FormSection>
      <FormSection>
        <p>anytime before</p>
        <div className='text-red'>
          21.fev.2020
        </div>
      </FormSection>
      <div className='form-actions'>
        <Button size='big'>
          Write
        </Button>
      </div>
    </Form>
  )
}
