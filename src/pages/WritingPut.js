import { BackgroundCard, Container, Page, PageTitle, PutForm } from 'components'
import React from 'react'

export default function WritingPut () {
  return (
    <Page
      path='/put/:underlying/:strike/:optionAddress' render={({ match }) => {
        const { underlying, strike, optionAddress } = match.params
        return (
          <Container>
            <BackgroundCard>
              <PageTitle>
              Write Put Option On {underlying.toUpperCase()}:{strike.toUpperCase()} Market
              </PageTitle>
              <PutForm optionAddress={optionAddress} />
            </BackgroundCard>
          </Container>
        )
      }} exact
    />
  )
}
