import React from 'react';

import './styles.scss';
import './query.scss';

const BlogCMS = () => {
  return (
    <section className='blog-cms-wrapper'>
      <div className='blog-cms-header'>
        <input
          type='text'
          className='blog-cms-header'
        />
      </div>
      <div className='blog-cms-subheader'></div>
      <div className='blog-cms-body'>
        <textarea />
      </div>
    </section>
  );
};
 
export default BlogCMS;