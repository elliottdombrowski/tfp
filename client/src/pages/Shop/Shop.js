import React, { useState } from 'react';

import ShopNav from '../../components/ShopNav/ShopNav';
import Category from '../../components/Category/Category';

import './styles.scss';
import './query.scss';

const Shop = () => {
  const [category, setCategory] = useState('vinyl');
  console.log(category);

  return (
    <section className='shop-wrapper'>
      <ShopNav category={category} setCategory={setCategory} />
      <Category category={category} />
    </section>
  );
};
 
export default Shop;