import React from 'react';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

const App = () => {
  const [account, setAccount] = React.useState(null);

  React.useEffect(() => {
    // Check if MetaMask is installed and enabled
    if (typeof window.ethereum !== 'undefined') {
      // Request the user's permission to access their MetaMask account
      window.ethereum.enable().then(accounts => {
        // Set the user's MetaMask account as the default account for web3
        web3.eth.defaultAccount = accounts[0];
        setAccount(accounts[0]);
      });
    }
  }, []);

  return (
    <div>
      {account ? (
        <h1>Your MetaMask account: {account}</h1>
      ) : (
        <h1>Please install and enable MetaMask to continue</h1>
      )}
    </div>
  );
};

export default App;
