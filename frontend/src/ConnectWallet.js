import React, { useState } from 'react';
import Web3 from 'web3';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWalletHandler = async () => {
    // Check if MetaMask is installed on user's browser
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // We currently only handle the first account
        const account = accounts[0];
        setWalletAddress(account);
      } catch (error) {
        console.error("User denied account access or error occurred:", error);
      }
    } else {
      alert('You need to install MetaMask or another Ethereum wallet!');
    }
  };

  // Function to display the address in a shortened format
  const formatAddress = (address) => {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
  };

  return (
    <div className="fixed top-5 right-5">
      {walletAddress ? (
        <div className="text-green-500">{formatAddress(walletAddress)}</div>
      ) : (
        <button
          onClick={connectWalletHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;
