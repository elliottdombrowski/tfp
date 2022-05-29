import React from 'react';

import './styles.scss';
import './query.scss';

const BlogCMS = () => {
  return (
    <section className='blog-cms-wrapper'>
      <div className='blog-cms-header'>
        <input
          type='text'
          placeholder='header.'
          className='blog-cms-header-input'
          />
      </div>

      <div className='blog-cms-subheader'>
        <input
          type='text'
          placeholder='subheader.'
          className='blog-cms-subheader-input'
        />
      </div>

      <div className='blog-cms-body'>
        <textarea />
      </div>
    </section>
  );
};

export default BlogCMS;