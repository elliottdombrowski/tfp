import React, { useState } from 'react';

import './styles.scss';
import './query.scss';

const categories = [
  {
    id: 1,
    name: 'vinyl'
  },
  {
    id: 2,
    name: 'cassettes'
  },
  {
    id: 3,
    name: 'cds'
  },
  {
    id: 4,
    name: 't-shirts'
  },
  {
    id: 5,
    name: 'hoodies'
  },
  {
    id: 6,
    name: 'hats'
  },
]

const ShopNav = () => {
  const [category, setCategory] = useState('');
  
  return (
    <div className='shop-nav'>
      <ul className='shop-category-list'>
        <li>
          <h1
            onClick={() => setCategory('vinyl')}
          >vinyl</h1>
        </li>
        <li>
          <h1
            onClick={() => setCategory('cassettes')}
          >cassettes</h1>
        </li>
        <li>
          <h1
            onClick={() => setCategory('cds')}
          >cds</h1>
        </li>
        <li>
          <h1
            onClick={() => setCategory('t-shirts')}
          >t-shirts</h1>
        </li>
        <li>
          <h1
            onClick={() => setCategory('hoodies')}
          >hoodies</h1>
        </li>
        <li>
          <h1 
            onClick={() => setCategory('hats')}
          >hats</h1>
        </li>
      </ul>
    </div>
  );
};
 
export default ShopNav;