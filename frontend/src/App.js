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
    <div>
      <ConnectWallet />
      <AspectList onAddAspect={openModal} />
      {isModalOpen && <AddAspectModal aspect={selectedAspect} onClose={closeModal} />}
    </div>
  );
}

export default App;

