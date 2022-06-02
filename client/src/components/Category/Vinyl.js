import React from 'react';

const vinyls = [
  {
    id: 1,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 2,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 3,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 4,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 5,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 6,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 7,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 8,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 9,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 10,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 11,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
  {
    id: 12,
    title: 'TFP 12" Vinyl',
    price: '25.00'
  },
];

const Vinyl = () => {
  return (
    <>
      {
        vinyls.map((vinyl) => {
          return (
            <div className='product' key={vinyl.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{vinyl.title}</h1>
              <p>${vinyl.price}</p>

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
 
export default Vinyl;