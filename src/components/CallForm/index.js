import { Button, Form, FormSection } from 'components'
import numeral from 'numeral'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'

export default function PutForm () {
  const [amount, setAmount] = useState(0)
  const futureDate = '21.fev.2020'
  const strikePrice = 270

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
        <p>committing to sell it at</p>
        <div className='text-green'>
          {numeral(strikePrice * amount).format('0.00')} DAI
        </div>
      </FormSection>
      <FormSection>
        <p>anytime before</p>
        <div className='text-red'>
          {futureDate}
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
