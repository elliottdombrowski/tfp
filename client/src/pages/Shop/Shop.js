import React from 'react';

import ShopNav from '../../components/ShopNav/ShopNav';
import Category from '../../components/Category/Category';

import './styles.scss';
import './query.scss';

const Shop = () => {
  return (
    <section className='shop-wrapper'>
      <ShopNav />
      <Category />
    </section>
  );
};
 
export default Shop;