import React from 'react';

import './styles.scss';
import './query.scss';

const categories = [
  {
    id: 1,
    name: 'Vinyl'
  },
  {
    id: 2,
    name: 'Cassettes'
  },
  {
    id: 3,
    name: 'CDs'
  },
  {
    id: 4,
    name: 'T-Shirts'
  },
  {
    id: 5,
    name: 'Hoodies'
  },
  {
    id: 6,
    name: 'Hats'
  },
]

const ShopNav = () => {
  return (
    <div className='shop-nav'>
      <ul className='shop-category-list' key={categories.id}>
        {
          categories.map((category) => {
            return (
              <li>{category.name}</li>
            );
          })
        }
      </ul>
    </div>
  );
};
 
export default ShopNav;