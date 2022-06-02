import React from 'react';

const cassettes = [
  {
    id: 1,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 2,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 3,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 4,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 5,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 6,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 7,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 8,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 9,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 10,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 11,
    title: 'TFP Cassette',
    price: '10.00'
  },
  {
    id: 12,
    title: 'TFP Cassette',
    price: '10.00'
  },
];

const Cassettes = () => {
  return (
    <>
      {
        cassettes.map((cassette) => {
          return (
            <div className='product' key={cassette.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{cassette.title}</h1>
              <p>${cassette.price}</p>
            </div>
          );
        })
      }
    </>
  );
};
 
export default Cassettes;