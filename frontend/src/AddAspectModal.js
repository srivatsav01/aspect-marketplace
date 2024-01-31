import React, { useState } from 'react';
import Modal from 'react-modal';
const Web3 = require("@artela/web3");

function AddAspectModal({ aspect, onClose }) {
  const [contractAddress, setContractAddress] = useState('0xD1E33991b7E0998cb5DB61CC60d8297deb9b70Bb');
  const [abiFile, setAbiFile] = useState('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"hello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"world","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}]');

  const ASPECT_ADDR = "0x0000000000000000000000000000000000A27E14";
  
  const handleBindAspect = async() => {
    const web3 = new Web3(window.ethereum);

      // Request access to the user's MetaMask account
      const accounts = await window.ethereum.request({'method':'eth_requestAccounts'});

      // Get the current Ethereum accounts

      const sender = accounts[0];
      console.log(sender)
   
    console.log(JSON.parse(abiFile))
    try {
        
        const web3 = new Web3(window.ethereum)

        let storageInstance = new web3.eth.Contract(JSON.parse(abiFile),contractAddress)
        console.log(storageInstance)


        // Bind the smart contract with aspect
        let binded = await storageInstance.bind({
          priority: 1,
          aspectId: aspect.id, // Replace with your actual aspectId
          aspectVersion: 1,
        })

        let tx = {
            from: sender,
            data: binded.encodeABI(),
            to: ASPECT_ADDR,
        }
        console.log(tx)

        let signedTx = await web3.eth.sendTransaction(tx)
       
        // console.log('Transaction hash:', bind.transactionHash);
      }catch (error) {
        console.error('Error:', error);
      } 
    
    onClose();
  };

  return (
    <Modal   isOpen={true} 
    onRequestClose={onClose} 
    className="relative p-5 bg-white rounded-lg shadow-xl max-w-md mx-auto my-16"
    overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
    <h2 className="text-xl font-semibold text-gray-800">Add Aspect: {aspect?.name}</h2>
    <input className="border border-gray-300 rounded p-2 w-full mt-3" type="text" placeholder="Contract Address" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} />
    <input className="border border-gray-300 rounded p-2 w-full mt-3" type="text" placeholder="ABI" value={abiFile} onChange={(e) => setAbiFile(e.target.value)} />
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 transition-colors duration-300" onClick={handleBindAspect}>Bind Aspect</button>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 ml-2 transition-colors duration-300" onClick={onClose}>Close</button>
  </Modal>
  );


}


export default AddAspectModal;  
