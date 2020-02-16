import { BackgroundCard, Container, LinkButton, Page, PageTitle, Table } from 'components'
import getAddresses from 'constants/addresses'
import React from 'react'

export default function Writing () {
  const { call, put } = getAddresses()

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
                <td>fev, 22 2020</td>
                <td>
                  <LinkButton to={`/call/ETH/DAI/${call}`}>write</LinkButton>
                </td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>ETH</td>
                <td>270 DAI</td>
                <td>fev, 22 2020</td>
                <td>
                  <LinkButton to={`/put/ETH/DAI/${put}`}>write</LinkButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </BackgroundCard>
      </Container>
    </Page>
  )
}
