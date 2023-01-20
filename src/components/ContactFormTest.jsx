import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const bodySend = {
      "senderName": formData.senderName,
      "senderEmail": formData.senderEmail,
      "message": formData.message
    }

    JSON.stringify(bodySend);

    // Make the POST request
    fetch('https://1pmu7gfk1m.execute-api.us-west-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodySend
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
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
    </form>
  );
}

export default ContactForm;
