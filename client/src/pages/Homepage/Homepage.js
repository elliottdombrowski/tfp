import React from 'react';

import Releases from '../../components/Releases/Releases';
import MainContent from '../../components/MainContent/MainContent';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <main>
      <div className='main-content'>
        <img src={require('../../assets/tfp-spotlight.png')} />
        {/* <Releases /> */}
      </div>

      <MainContent />
    </main>
  );
};
 
export default Homepage;