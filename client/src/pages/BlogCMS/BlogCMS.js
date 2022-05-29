import React from 'react';

import './styles.scss';
import './query.scss';

const BlogCMS = () => {
  return (
    <section className='blog-cms-wrapper'>
      <form className='blog-cms-form'>
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

        <div className='blog-cms-btn-wrapper'>
          <button
            className='blog-cms-schedule'
          >
            Schedule
          </button>

          <button
            className='blog-cms-submit'
            type='submit'
          >
            Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default BlogCMS;