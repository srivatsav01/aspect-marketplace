import React, { useState } from 'react';
import ConnectWallet from './ConnectWallet';
import AspectList from './AspectList';
import AddAspectModal from './AddAspectModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAspect, setSelectedAspect] = useState(null);

  const openModal = (aspect) => {
    setSelectedAspect(aspect);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 flex flex-col">
      <header className="text-white text-center pt-20">
        <h1 className="text-4xl font-bold">Aspect Marketplace</h1>
        <p className="text-xl mt-2">Empowering Smart Contract Development</p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center pt-2"> {/* Slightly reduced top padding */}
        <ConnectWallet />
        <AspectList onAddAspect={openModal} />
        {isModalOpen && <AddAspectModal aspect={selectedAspect} onClose={closeModal} />}
      </main>
    </div>
  );
}

export default App;
