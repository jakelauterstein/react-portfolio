import React from 'react';
import logo from '../../assets/logo.png'

function Nav() {

  return (
    <header>
 
  <nav>

    <ul className="flex-row">
    <li className="mx-2">
    <a href="/">
          <img src={logo} alt="logo" width="60px" />
    </a>
      </li>
      <li className="mx-2">
        <a href="#about">
          Hi! I'm Jake Lauterstein
        </a>
      </li>
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className='mx-2'>
      <a href="#contact">
          Contact
        </a>      
      </li>
      <li className="mx-2">
        <a href="#portfolio">
          Portfolio
        </a>
      </li>
      <li className="mx-2">
        <a href="#resume">
          Resume
        </a>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;