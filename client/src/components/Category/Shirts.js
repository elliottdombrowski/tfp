import React from 'react';

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

const Shirts = () => {
  return (
    <>
      {
        shirts.map((shirt) => {
          return (
            <div className='product' key={shirt.id}>
              <img src={require('./no-img.jpeg')} />
              <h1>{shirt.title}</h1>
              <p>${shirt.price}</p>

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
 
export default Shirts;