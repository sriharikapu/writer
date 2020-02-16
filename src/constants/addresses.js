import { getNetworkVersion } from 'hooks/web3'

export default function getAddresses () {
  const network = getNetworkVersion()

  switch (network) {
    case '1':
      return {
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
        call: '0x3D291c0F8cC7eC762ed70264E076252BA41731BA',
        put: '0x1669803cFb4F5F97B5aCAe3c12bb0fB4b65C0f2E',
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
