import { BackgroundCard, Button, Container, Page, PageTitle } from 'components'
import React from 'react'

export default function WritingPut () {
  return (
    <Page
      path='/put/:underlying/:strike/:optionAddress' render={({ match }) => {
        const { underlying, strike } = match.params
        return (
          <Container>
            <BackgroundCard>
              <PageTitle>
              Write Put Option On {underlying.toUpperCase()}:{strike.toUpperCase()} Market
              </PageTitle>
              <div className='text-center'>
                <Button size='big'>
                Write
                </Button>
              </div>
            </BackgroundCard>
          </Container>
        )
      }} exact
    />
  )
}
