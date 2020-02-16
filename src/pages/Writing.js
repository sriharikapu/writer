import { BackgroundCard, Container, Page, PageTitle, Table, LinkButton } from 'components'
import React from 'react'

export default function Writing () {
  return (
    <Page path='/' exact>
      <Container>
        <BackgroundCard>
          <PageTitle>ETH:DAI Options Market</PageTitle>
          <Table>
            <thead>
              <tr>
                <th>type</th>
                <th>underlying asset</th>
                <th>strike price</th>
                <th>expiring</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CALL</td>
                <td>ETH</td>
                <td>270 DAI</td>
                <td>21 fev 2020</td>
                <td>
                  <LinkButton to='/call/ETH/DAI/0x123'>write</LinkButton>
                </td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>ETH</td>
                <td>270 DAI</td>
                <td>21 fev 2020</td>
                <td>
                  <LinkButton to='/put/ETH/DAI/0x456'>write</LinkButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </BackgroundCard>
      </Container>
    </Page>
  )
}
