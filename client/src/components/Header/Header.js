import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import './query.scss';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo' />
      </Link>

        <ul className='main-nav'>
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