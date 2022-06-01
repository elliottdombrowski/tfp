import React from 'react';

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