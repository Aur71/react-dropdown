import React from 'react';
import { useGlobalContext } from './context';
import { IoMdClose } from 'react-icons/io';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && 'sidebar-active'}`}>
      <IoMdClose id="close-sidebar" onClick={closeSidebar} />

      {sublinks.map((item, index) => {
        const { links, page } = item;
        return (
          <ul key={index} className="sidebar-container">
            <div className="sidebar-header">
              <h3>{page}</h3>
            </div>

            <div className="sidebar-links">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                );
              })}
            </div>
          </ul>
        );
      })}
    </aside>
  );
};

export default Sidebar;
