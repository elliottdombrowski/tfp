import React from 'react';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <main>
      <div className='cover-photo'>
        <img src={require('../../assets/bongripper2.jpeg')} />
      </div>
    </main>
  );
};
 
export default Homepage;