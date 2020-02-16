import { useWeb3 } from 'hooks/web3'
import { useEffect, useState } from 'react'
import OptionABI from 'abi/option'

export default function useExpirationDate (address) {
  const web3 = useWeb3()
  const [date, setDate] = useState(null)

  useEffect(() => {
    if (web3) {
      const contract = new web3.eth.Contract(OptionABI, address)

      Promise.all([
        contract.methods.expirationBlockNumber().call(),
        web3.eth.getBlockNumber()
      ]).then(([expirationBlock, currentBlock]) => {
        setDate(humanDateByBlock(currentBlock, expirationBlock))
      })
    }
  }, [web3, address])

  return date
}

export const humanDateByBlock = (startBlock, endBlock) => {
  const diffBetweenBlocksInMilliseconds = (endBlock - startBlock) * 15 * 1000

  const now = new Date().valueOf()
  const futureDate = now + diffBetweenBlocksInMilliseconds

  const day = new Date(futureDate).getUTCDate()
  const month = new Date(futureDate).getUTCMonth()
  const year = new Date(futureDate).getFullYear()
  return `${monthToString(month)}, ${day} ${year}`
}

const monthToString = monthNumber => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ]

  if (monthNumber >= 0 && monthNumber <= 11) {
    return months[monthNumber]
  }

  return '-'
}
