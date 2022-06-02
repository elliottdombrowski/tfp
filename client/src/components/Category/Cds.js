import React from 'react';

const cds = [
  {
    id: 1,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 2,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 3,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 4,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 5,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 6,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 7,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 8,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 9,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 10,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 11,
    title: 'TFP CD',
    price: '15.00'
  },
  {
    id: 12,
    title: 'TFP CD',
    price: '15.00'
  },
];

const Cds = () => {
  return (
    <>
      {
        cds.map((cd) => {
          return (
            <div className='product' key={cd.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{cd.title}</h1>
              <p>${cd.price}</p>
            </div>
          );
        })
      }
    </>
  );
};
 
export default Cds;