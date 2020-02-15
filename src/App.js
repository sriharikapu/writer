import React from 'react';
import { useWeb3Provider, Web3Context } from './hooks/web3'

const App = () => {
  const { web3 } = useWeb3Provider()
  return (
    <Web3Context.Provider value={web3}>
     <div>Test</div>
    </Web3Context.Provider>
  )
}

export default App
