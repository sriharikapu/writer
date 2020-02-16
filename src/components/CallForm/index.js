import { Button, Form, FormSection } from 'components'
import CallStepper from 'components/CallStepper'
import useExpirationDate from 'hooks/useExpirationDate'
import useStrikePrice from 'hooks/useStrikePrice'
import numeral from 'numeral'
import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input'

export default function CallForm ({ optionAddress }) {
  const [amount, setAmount] = useState(0)
  const [stepperIsOpen, setIsStepperOpen] = useState(false)
  const futureDate = useExpirationDate(optionAddress)
  const strikePrice = useStrikePrice(optionAddress)

  return (
    <Form onSubmit={event => {
      event.preventDefault()
      setIsStepperOpen(true)
    }}
    >
      <FormSection>
        <p>I agree to lock</p>
        <div className='text-blue'>
          <CurrencyInput
            value={amount}
            onChange={(masked, value) => {
              setAmount(value)
            }}
            decimalSeparator='.'
            thousandSeparator=''
            suffix=' ETH'
          />
        </div>
      </FormSection>
      <FormSection>
        <p>committing to sell it for</p>
        <div className='text-green'>
          {numeral(strikePrice).format('0.00')} DAI
        </div>
      </FormSection>
      <FormSection>
        <p>anytime before</p>
        <div className='text-red'>
          {futureDate}
        </div>
      </FormSection>
      <div className='form-actions'>
        <Button size='big' type='submit' disabled={amount <= 0}>
          Write
        </Button>
      </div>
      {stepperIsOpen && (
        <CallStepper amount={amount} onClose={() => setIsStepperOpen(false)} />
      )}
    </Form>
  )
}
