import React, { useContext, useEffect, useState } from 'react'
import Web3 from 'web3'

export const Web3Context = React.createContext(undefined)

export function useWeb3Provider () {
    const [web3, setWeb3] = useState()
  
    useEffect(() => {
      const initializeWeb3 = async () => {
        if (window.ethereum) {
          const { ethereum } = window
          await ethereum.enable()
  
          const _web3 = new Web3(ethereum)
          setWeb3(_web3)
        }
      }
      initializeWeb3()
    }, [])
  
    return { web3 }
}

export function useWeb3 () {
  return useContext(Web3Context)
}