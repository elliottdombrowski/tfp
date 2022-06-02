import React from 'react';

import './styles.scss';
import './query.scss';

const shirts = [
  {
    id: 1,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 2,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 3,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 4,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 5,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 6,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 7,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 8,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 9,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 10,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 11,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
  {
    id: 12,
    title: 'TFP Black T-Shirt',
    price: '20.00'
  },
];

const Category = () => {
  return (
    <section className='category-page-wrapper'>
      <h1 className='category-header'>
        t-shirts
      </h1>

      <div className='category-wrapper'>
        {
          shirts.map((shirt) => {
            return (
              <div className='shirt-product' key={shirt.id}>
                <img src={require('./no-img.jpeg')} />
                <h1>{shirt.title}</h1>
                <p>${shirt.price}</p>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
 
export default Category;