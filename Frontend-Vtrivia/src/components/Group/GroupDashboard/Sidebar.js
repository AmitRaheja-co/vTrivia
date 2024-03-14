import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import "./Style.css";
const Sidebar = ({ members,onClose }) => {
  const location = useLocation();
  const props = location.state?.props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
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
          <h1 className="text-xl uppercase text-indigo-500 my-3">Members</h1>
        </div>
      </div>
 
      <ul>
        {members.map((name, index) => (
          <li key={index} className="mb-2">
            {name}
          </li>
        ))}
      </ul>
    </aside>
    
  );
};
 
export default Sidebar;
 