import React from 'react';

import Shirts from './Shirts';
import Cassettes from './Cassettes';
import Vinyl from './Vinyl';
import Cds from './Cds';
import Hoodies from './Hoodies';
import Hats from './Hats';

import './styles.scss';
import './query.scss';

const Category = ({ category }) => {
  let categoryPage;
  
  if (category === 't-shirts') {
    categoryPage = <Shirts />
  }
  if (category === 'cassettes') {
    categoryPage = <Cassettes />
  }
  if (category === 'vinyl') {
    categoryPage = <Vinyl />
  }
  if (category === 'cds') {
    categoryPage = <Cds />
  }
  if (category === 'hoodies') {
    categoryPage = <Hoodies />
  }
  if (category === 'hats') {
    categoryPage = <Hats />
  };

  return (
    <section className='category-page-wrapper'>
      <h1 className='category-header'>
        {category}
      </h1>

      <div className='category-wrapper'>
        {categoryPage}
      </div>
    </section>
  );
};
 
export default Category;