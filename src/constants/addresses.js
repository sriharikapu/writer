import { getNetworkVersion } from 'hooks/web3'

export default function getAddresses () {
  const network = getNetworkVersion()

  switch (network) {
    case '1':
      return {
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
        call: '0x9ed68E380A1433Ead80267c0E0dDa209a695bDC4',
        put: '0x83c9FD6754666F4c5dC3556afBD7B5b48E46E99b',
        putFactoryAddress: ''
      }
    case '42':
    default:
      return {
        dai: '0x7cedcc5a8344a079ed7863577cf93cd7db80c1b2',
        call: '0x9ed68E380A1433Ead80267c0E0dDa209a695bDC4',
        put: '0x58052854f0CdE960BDCAA676EF37C571523ad18B',
        putFactoryAddress: ''
      }
  }
}
