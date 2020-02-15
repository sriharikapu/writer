import React from "react";
import { useWeb3Provider, Web3Context } from "./hooks/web3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./theme";

const Header = () => <div>Placeholder</div>;
const Footer = () => <div>Placeholder</div>;
const HomePage = () => <div>Placeholder</div>;
const PageNotFound = () => <div>Placeholder</div>;

const App = () => {
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
