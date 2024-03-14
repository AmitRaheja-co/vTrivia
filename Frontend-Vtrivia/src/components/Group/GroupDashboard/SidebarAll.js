import React, { useState } from "react";
import Modal from 'react-modal';
import InviteModal from "./InviteModal";
import { useLocation } from "react-router-dom";

const SidebarAll = ({ allusers, admin, grpId, onClose }) => {
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
    <aside className="mt-7 bg-gray-100 rounded-md dark:bg-gray-100 w-1/4 p-4 fixed right-0 h-full overflow-y-auto" style={{
      top: '63px'
    }}>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-600 hover:text-gray-800 dark:hover:text-black focus:outline-none"
        >
          Close
        </button>
      </div>
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-xl uppercase text-indigo-500 my-3">Invite Members</h1>
        </div>
      </div>
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
    </aside>
  );
};

export default SidebarAll;
