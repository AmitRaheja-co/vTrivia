import React, { useState } from "react";
import Modal from 'react-modal';
import InviteModal from "./InviteModal";
import { useLocation } from "react-router-dom";
 
const SidebarAll = ({ allusers,admin,grpId,onClose }) => {
  const [createQuizModal, setCreateQuizModal] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const props = location.state?.props;
  const openCreateQuizModal = () => {
    setCreateQuizModal(true);
  };

  const closeCreateQuizModal = () => {
    setCreateQuizModal(false);
  };
  const handleNameClick = (id, name) => {
    setSelectedName({ id, name });
    setCreateQuizModal(true);
  };

  return (
    <aside className="mt-7 bg-sky-500 rounded-md dark:bg-blue-600 w-1/4 p-4 fixed top-23 right-0 h-full overflow-y-auto">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-600 hover:text-gray-800 dark:hover:text-black focus:outline-none"
        >
          Close
        </button>
      </div>
 
      <h3 className="text-xl font-semibold mb-4">Invite Them</h3>
 
      <ul>
      {allusers.map((user) => (
          <li key={user.id} className="mb-2" onClick={() => handleNameClick(user.id, user.userName)}>
            <span style={{ cursor: 'pointer' }}>{user.userName}</span>
          </li>
        ))}
      </ul>
      <InviteModal
                  grpId={grpId}
                  admin={admin}
                  id={selectedName && selectedName.id}
                  name={selectedName && selectedName.name}
                  isOpen={createQuizModal}
                  onClose={closeCreateQuizModal}
                />
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"        
      >
        <div>
        <h2>admin:{admin}</h2>
          <h2>ID: {selectedName && selectedName.id}</h2>
          <h2>Name: {selectedName && selectedName.name}</h2>
        </div>
      </Modal> */}
    </aside>
  );
};
 
export default SidebarAll;
 