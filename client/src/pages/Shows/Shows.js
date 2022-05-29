import React from 'react';

import './styles.scss';
import './query.scss';

const show = [
  {
    id: 1,
    venue: 'house of blues',
  },
];

const Shows = () => {
  return (
    <section className='shows-page'>
      <div className='shows-wrapper'>
        {
          show.map((shows) => {
            return (
              <div className='shows-output' key={shows.id}>
                <h1>{shows.venue}</h1>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
 
export default Shows;