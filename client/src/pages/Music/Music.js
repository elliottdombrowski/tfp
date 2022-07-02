import React from 'react';

import './styles.scss';
import './query.scss';

const Music = () => {
  return (
    <section className='music-page'>
      <div className='release-cover'>
        <img src={require('../../assets/extraviolence.jpeg')} />
      </div>
    </section>
  );
};
 
export default Music;