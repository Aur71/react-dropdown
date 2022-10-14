import React from 'react';
import { useGlobalContext } from './context';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 5;
    openSubmenu(page, { center, bottom });
  };

  return (
    <nav>
      <div className="nav-header">
        <h2 id="logo">LOGO</h2>
        <GiHamburgerMenu id="open-sidebar" onClick={openSidebar} />
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
            products
          </button>
        </li>

        <li>
          <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
            developers
          </button>
        </li>

        <li>
          <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
            company
          </button>
        </li>
      </ul>

      <button className="signin-btn">sign in</button>
    </nav>
  );
};

export default Navbar;
