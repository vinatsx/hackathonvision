import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Crowd Control Checker
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Information
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/checkcrowd'>Check Crowd</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
