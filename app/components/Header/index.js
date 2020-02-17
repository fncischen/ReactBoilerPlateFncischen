import React from 'react';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/strings">List of Strings</HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
