import React from 'react';
import { Link } from 'react-router-dom';

function Menu({menuActive}) {
  return <nav className={`fixed top-0 left-0 w-full h-full bg-black/10 menu ${menuActive ? 'menu--open' : ''}`}>
      <ul className='flex flex-col items-start justify-start p-16 h-full w-3/4 lg:w-2/3 bg-white ml-auto'>
          <li className='mb-8 text-xl text-black/50'>menu</li>
        <li className=''><Link to='' className='nav__link hoverable' data-text="Process">Process</Link></li>
        <li className=''><Link to='' className='nav__link hoverable' data-text="Work">Work</Link></li>
        <li className=''><Link to='' className='nav__link hoverable' data-text="Service">Service</Link></li>
        <li className=''><Link to='' className='nav__link hoverable' data-text="Us">Us</Link></li>
        <li className=''><Link to='' className='nav__link hoverable' data-text="Contact">Contact</Link></li>
        <li className='mt-8'><Link to='' className='nav__link text-xl text-black/50 hoverable'>Get in Touch</Link></li>
      </ul>
  </nav>;
}

export default Menu;
