import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`submenu ${isSubmenuOpen && 'show-submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <ul
        className={`submenu-list ${
          links.length < 4 ? `submenu-list-${links.length}` : 'submenu-list-4'
        }`}
      >
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Submenu;
