import { BackgroundCard, Container, Page, PageTitle, PutForm } from 'components'
import React from 'react'

export default function WritingCall () {
  return (
    <Page
      path='/call/:underlying/:strike/:optionAddress' exact render={({ match }) => {
        const { underlying, strike } = match.params
        return (
          <Container>
            <BackgroundCard>
              <PageTitle>
              Write Call Option On {underlying.toUpperCase()}:{strike.toUpperCase()} Market
              </PageTitle>
              <PutForm />
            </BackgroundCard>
          </Container>
        )
      }}
    />
  )
}
