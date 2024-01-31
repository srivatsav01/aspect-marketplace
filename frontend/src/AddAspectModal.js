import React, { useState } from 'react';
import Modal from 'react-modal';

function AddAspectModal({ aspect, onClose }) {
  const [contractAddress, setContractAddress] = useState('');
  const [abiFile, setAbiFile] = useState(null);

  const handleBindAspect = () => {
    // Implement binding logic later
    onClose();
  };

  return (
    <Modal   isOpen={true} 
    onRequestClose={onClose} 
    className="relative p-5 bg-white rounded-lg shadow-xl max-w-md mx-auto my-16"
    overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
    <h2 className="text-xl font-semibold text-gray-800">Add Aspect: {aspect?.name}</h2>
    <input className="border border-gray-300 rounded p-2 w-full mt-3" type="text" placeholder="Contract Address" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} />
    <input className="border border-gray-300 rounded p-2 w-full mt-3" type="file" onChange={(e) => setAbiFile(e.target.files[0])} />
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 transition-colors duration-300" onClick={handleBindAspect}>Bind Aspect</button>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 ml-2 transition-colors duration-300" onClick={onClose}>Close</button>
  </Modal>
  );
}

export default AddAspectModal;  
