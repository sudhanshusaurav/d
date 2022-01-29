import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Menu from './Menu';

function Header() {
    const [menuActive, setMenuActive] = useState(false);

  return <header className='w-[95%] h-[15vh] mx-auto flex items-center justify-between'>
      <div className=''>
          <Link to='/' className=''><img src={Logo} alt="logo" /></Link>
      </div>
      <div className='flex items-center gap-4'>
          <p onClick={() => setMenuActive(!menuActive)} className='hidden lg:block text-xl leading-none mt-1 mr-12'>menu</p>
          <div onClick={() => setMenuActive(!menuActive)} className={`hamburger mt-1 hoverable ${menuActive ? 'hamburger-active' : 'hamburger-inactive'}`}>
              <div></div>
              <div></div>
          </div>
          <Menu menuActive={menuActive}/>
      </div>
  </header>;
}

export default Header;
