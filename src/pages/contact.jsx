import React from 'react';

import './contact.css';

function Contact() {
  return (
    <form className='container w-50 p-5 my-5 d-flex vstack'>
      <div className='form-floating mb-3 '>
        <input
          type='email'
          className='form-control'
          id='email'
          value='name@example.com'
        />
        <label for='email' className='form-label'>
          Email Address
        </label>
      </div>
      <div className='mb-3 form-floating'>
        <textarea className='form-control' id='textArea'></textarea>
        <label for='textArea'>Message...</label>
      </div>
      <button className='btn btn-primary' type='submit'>
        Send Email
      </button>
    </form>
  );
}

export default Contact;
