
import React from 'react';

function AspectList({ onAddAspect }) {
  const aspects = [
    { name: 'Session key Aspect', description: 'Enables Ethereum on-chain accounts (EoA) to extend their capabilities by creating and managing session keys.', id: '0x1d32582793CA312ee73b8F073720b0b86360D948' },
    { name: 'World Aspect', description: 'Transaction reverts if the function world() does not exist on the contract', id: '0x1d32582793CA312ee73b8F073720b0b86360D948.' },
    { name: 'Reentrancy Aspect', description: 'Aspect can prevent hacks similar to the reentrant attack happened to Curve.fi', id: '0x1d32582793CA312ee73b8F073720b0b86360D948' },
    { name: 'Student Aspect', description: 'Checks if a specific address is of student or not else it reverts', id: '0x1d32582793CA312ee73b8F073720b0b86360D948' },
    { name: 'Price Aspect', description: 'Reverts transactions if token value falls below threshold, ensuring multisig wallet security despite signing delays', id: '0x1d32582793CA312ee73b8F073720b0b86360D948' },
    { name: 'Hack Aspect', description: 'Checks if a protocol is being hacked and reverts if huge funds are being lost', id: '0x1d32582793CA312ee73b8F073720b0b86360D948.' },
   
  ];

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
        {aspects.map((aspect, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{aspect.name}</h3>
            <p className="text-gray-600">{aspect.description}</p>
            <button 
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-3 transition-colors duration-300"
              onClick={() => onAddAspect(aspect)}
            >
              Add Aspect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AspectList;


