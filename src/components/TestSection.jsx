import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import ContactForm from './ContactForm';


const TestSection = () => {
  return (
    <form className='flex flex-col'>
      <label htmlFor="name">Name</label>
        <input type="text" id="name" className="border-solid border border-black"/>
        <div className="border-solid border-black">
          {/* how do i get key from environment */}
          <ReCAPTCHA sitekey="your_site_key_here" size="normal" />
        </div>
        <button>Submit</button>
    </form>
  )
}

export default TestSection