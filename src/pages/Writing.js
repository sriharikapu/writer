import { BackgroundCard, Container, LinkButton, Page, PageTitle, Table } from 'components'
import { getNetworkVersion } from 'hooks/web3'
import React from 'react'

export default function Writing () {
  const network = getNetworkVersion()
  let call = '0x9ed68E380A1433Ead80267c0E0dDa209a695bDC4'
  let put = '0x58052854f0CdE960BDCAA676EF37C571523ad18B'

  if (network === '1') {
    call = '0x9ed68E380A1433Ead80267c0E0dDa209a695bDC4'
    put = '0x83c9FD6754666F4c5dC3556afBD7B5b48E46E99b'
  }

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
