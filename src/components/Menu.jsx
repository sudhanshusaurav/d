import React from 'react';
import { Link } from 'react-router-dom';

function Menu({menuActive}) {
  return <nav className={`fixed top-0 left-0 w-full h-full bg-black/10 menu ${menuActive ? 'menu--open' : ''}`}>
      <ul className='flex flex-col items-start justify-start p-16 h-full w-3/4 lg:w-2/3 bg-white ml-auto'>
          <li className='mb-8 text-xl text-black/50'>menu</li>
        <li className='my-2'><Link to='' className='nav__link'>Process</Link></li>
        <li className='my-2'><Link to='' className='nav__link'>Work</Link></li>
        <li className='my-2'><Link to='' className='nav__link'>Service</Link></li>
        <li className='my-2'><Link to='' className='nav__link'>Us</Link></li>
        <li className='my-2'><Link to='' className='nav__link'>Contact</Link></li>
        <li className='mt-8 text-black/50'><Link to='' className='nav__link text-xl hoverable'>Get in Touch</Link></li>
      </ul>
  </nav>;
}

export default Menu;
