import { useState } from 'react'


const ContactForm = () => {

  const headers = new Headers();
  const endpoint = 'https://lssystemog.execute-api.us-west-1.amazonaws.com/mail_fwd_js'

  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: ''
  });

  const [isSent, changeSent] = useState('Send')

  const [resultFromServer, updateResultFromServer] = useState('init');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(endpoint, 
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
      changeSent('Message Sent!');
    })
    .catch(error => {
      const buffer = JSON.stringify(error);
      console.error('Error:', error);
      // updateResultFromServer(error);
    });
  }

  return (
    <div className="w-full flex flex-col items-center align-center p-2 m-2 border-2 border-solid">
      <form onSubmit={handleSubmit} className='w-3/4 flex flex-col items-center'>
        <input
          className="border-2 w-full p-1 m-1"
          type="text"
          name="senderName"
          placeholder="Your name"
          value={formData.senderName}
          onChange={handleChange}
        />
        <input
        className="border-2 w-full p-1 m-1"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleChange}
        />
        <textarea
        className="border-2 w-full p-1 m-1"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          >
          </textarea>
        <button type="submit" 
          className="bg-blue-500 w-1/2 py-2 mt-2 text-white"
          onClick={(e) => {changeSent('Sending...')}}
          >
          {isSent}
        </button>
      </form>
    </div>
  );
}

export default ContactForm
