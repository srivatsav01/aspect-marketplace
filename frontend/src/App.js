import React, { useState } from 'react';
import ConnectWallet from './ConnectWallet';
import AspectList from './AspectList';
import AddAspectModal from './AddAspectModal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAspect, setSelectedAspect] = useState(null);

  const openModal = (aspect) => {
    setSelectedAspect(aspect);
    setIsModalOpen(true); // This should trigger the modal to open
  };

  const closeModal = () => {
    setIsModalOpen(false); // And this should close it
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-600">
      <header className="text-white text-center pt-8">
        <h1 className="text-4xl font-bold">Aspect Marketplace</h1>
        <p className="text-xl mt-2">Discover and bind aspects to your smart contracts</p>
      </header>
      <main className="flex flex-col items-center justify-center pt-8">
        <ConnectWallet />
        <AspectList onAddAspect={openModal} />
        {isModalOpen && <AddAspectModal aspect={selectedAspect} onClose={closeModal} />}
      </main>
    </div>
  );

}

export default App;

