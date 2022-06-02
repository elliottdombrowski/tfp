import React from 'react';

import Shirts from './Shirts';

import './styles.scss';
import './query.scss';

const Category = () => {
  

  return (
    <section className='category-page-wrapper'>
      <h1 className='category-header'>
        t-shirts
      </h1>

      <div className='category-wrapper'>
        <Shirts />
      </div>
    </section>
  );
};
 
export default Category;