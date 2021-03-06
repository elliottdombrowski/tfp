import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import './query.scss';


const Header = () => {
  //MOBILE MENU / HAMBURGER
  const mobileMenu = () => {
    document.getElementById('hamburger').classList.toggle('active');
  }

  // NAV RESIZING ON SCROLL 
  window.onscroll = function() {scaleNav()};
  function scaleNav() {
    let mainNav = document.getElementById('main-nav');
    let logo = document.getElementById('logo');

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // mainNav.style.fontSize = "16px";
      logo.style.height = "40px";
      logo.style.width = "250px";
    } else {
      // mainNav.style.fontSize = "24px";
      logo.style.height = "80px";
      logo.style.width = "500px";
    }
  };

  return (
    <header>
      <Link to='/'>
        <div 
          className='logo' 
          id='logo'
        ></div>
      </Link>

        <ul className='main-nav' id='main-nav'>
          <li>
            <Link to='/tour'>
              shows.
            </Link>
          </li>
          <li>
            <Link to='/releases'>
              music.
            </Link>
          </li>
          <li>
            <Link to='/shop'>
              merch.
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              blog.
            </Link>
          </li>
        </ul>

        <div 
          className='hamburger'
          id='hamburger'
          onClick={() => mobileMenu()}
        >
          <span className='bar' id='bar1' />
          <span className='bar' id='bar2' />
          <span className='bar' id='bar3' />
        </div>
    </header>
  );
};

export default Header;