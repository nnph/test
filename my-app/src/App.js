import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/metamask';
import { Binance } from '@binance-chain/javascript-sdk';

const App = () => {
  const [account, setAccount] = useState(null);
  const web3 = useWeb3React();

  const handleConnect = async () => {
    if (!web3) return;

    // Set the Binance network to Binance Smart Chain
    Binance.setNetwork('mainnet');

    // Get the user's Binance account address
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  return (
    <div>
      {!account && (
        <button onClick={handleConnect}>Connect with MetaMask</button>
      )}
      {account && <p>Your Binance account address: {account}</p>}
    </div>
  );
};

export default App;