import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import './query.scss';


const Header = () => {

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
            <Link to='#'>
              shows.
            </Link>
          </li>
          <li>
            <Link to='#'>
              music.
            </Link>
          </li>
          <li>
            <Link to='#'>
              merch.
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              blog.
            </Link>
          </li>
        </ul>
    </header>
  );
};

export default Header;