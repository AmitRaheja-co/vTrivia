import React from "react";
import { useLocation } from "react-router-dom";
 
const SidebarAll = ({ allusers,onClose }) => {
  const location = useLocation();
  const props = location.state?.props;
 
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
 
      <h3 className="text-xl font-semibold mb-4">header</h3>
 
      <ul>
        {allusers.map((name, index) => (
          <li key={index} className="mb-2">
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
 
export default SidebarAll;
 