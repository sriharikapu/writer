import OptionABI from 'abi/option'
import { useWeb3 } from 'hooks/web3'
import { useEffect, useState } from 'react'

export default function useStrikePrice (address) {
  const web3 = useWeb3()
  const [strikePrice, setStrikePrice] = useState(null)

  useEffect(() => {
    if (web3) {
      const contract = new web3.eth.Contract(OptionABI, address)

      contract.methods.strikePrice().call()
        .then(strikePrice => {
          setStrikePrice(parseFloat(strikePrice))
        })
    }
  }, [web3, address])

  return strikePrice
}
