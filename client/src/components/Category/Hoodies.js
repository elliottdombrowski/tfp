import React from 'react';

const hoodies = [
  {
    id: 1,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 2,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 3,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 4,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 5,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 6,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 7,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 8,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 9,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 10,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 11,
    title: 'TFP Black Hoodie',
    price: '30.00'
  },
  {
    id: 12,
    title: 'TFP Black Hoodie',
    price: '20.00'
  },
];

const Hoodies = () => {
  return (
    <>
      {
        hoodies.map((hoodie) => {
          return (
            <div className='product' key={hoodie.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{hoodie.title}</h1>
              <p>${hoodie.price}</p>

              <h1 className='product-btn'>
                <a href='#'>
                  buy on bandcamp
                </a>
              </h1>
            </div>
          );
        })
      }
    </>
  );
};
 
export default Hoodies;