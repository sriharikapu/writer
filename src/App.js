import React from "react";
import { useWeb3Provider, Web3Context } from "./hooks/web3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./theme";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/Home'
import PageNotFound from './pages/PageNotFound'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  toast.configure()
  const { web3 } = useWeb3Provider();
  return (
    <Web3Context.Provider value={web3}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </Web3Context.Provider>
  );
};

export default App;
