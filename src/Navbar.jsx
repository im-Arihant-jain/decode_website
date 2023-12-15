// components/Navbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
       <a className='logoanc' href="https://youtube.com/@arihantjain9496?si=2IhdA4Ld9QyxV_c3" target="_blank">
          <img src='https://yt3.googleusercontent.com/_ypJVXMQ86gryY_Yb4bAU8eK0xgXTzMN92NQEtNxFCBu0BESmhN-Fd88ThTuGEyC6RvdZ2w55X0=s176-c-k-c0x00ffffff-no-rj' className="logo" alt="Vite logo" />
        </a>
      <ul>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
          About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            Content
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            Challenge
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
