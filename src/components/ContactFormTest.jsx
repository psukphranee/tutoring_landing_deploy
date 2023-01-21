import React, { useState } from 'react';

function ContactForm() {

  const headers = new Headers();

  const [formData, setFormData] = useState({
    senderName: 'name',
    senderEmail: 'email@email.com',
    message: 'message content'
  });

  const [resultFromServer, updateResultFromServer] = useState('init');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://lssystemog.execute-api.us-west-1.amazonaws.com/mail_fwd_js', 
      {
        method : 'POST',
        body: JSON.stringify({
          senderEmail: formData.senderEmail,
          message: formData.message,
          senderName: formData.senderName
       })
      })
    .then(response => response.json())
    .then(data => {
      const buffer = JSON.stringify(data);
      console.log('Success:', data);
      // updateResultFromServer(data);
    })
    .catch(error => {
      const buffer = JSON.stringify(error);
      console.error('Error:', error);
      // updateResultFromServer(error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input
        className='border-2'
        type="text"
        name="senderName"
        placeholder="Your name"
        value={formData.senderName}
        onChange={handleChange}
      />
      <input
      className='border-2'
        type="email"
        name="senderEmail"
        placeholder="Your email"
        value={formData.senderEmail}
        onChange={handleChange}
      />
      <textarea
      className='border-2'
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send</button>
      <p>{resultFromServer}</p>
    </form>
  );
}

export default ContactForm;
