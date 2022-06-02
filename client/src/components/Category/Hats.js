import React from 'react';

const hats = [
  {
    id: 1,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 2,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 3,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 4,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 5,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 6,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 7,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 8,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 9,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 10,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 11,
    title: 'TFP Black Hat',
    price: '15.00'
  },
  {
    id: 12,
    title: 'TFP Black Hat',
    price: '15.00'
  },
];

const Hats = () => {
  return (
    <>
      {
        hats.map((hat) => {
          return (
            <div className='product' key={hat.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{hat.title}</h1>
              <p>${hat.price}</p>

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
 
export default Hats;