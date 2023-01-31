
  import { useState } from "react";
  import library from '../assets/manhattan_library_1.jpg';

  export default function ContactForm() {
  
    const headers = new Headers();
    const endpoint = 'https://lssystemog.execute-api.us-west-1.amazonaws.com/mail_fwd_js'
  
    const [formData, setFormData] = useState({
      senderFirstName: '',
      senderLastName: '',
      senderEmail: '',
      senderPhone: '',
      senderMessage: ''
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
          body: JSON.stringify(
          //   {
          //   senderEmail: formData.senderEmail,
          //   senderMessage: formData.senderMessage,
          //   senderFirstName: formData.senderFirstName,
          //   senderLastName: formData.senderLastName,
          //   senderPhone: formData.senderPhone
          // }
          formData
         )
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
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="hidden lg:block w-full object-cover lg:absolute lg:h-full"
              src={library}
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from
                you! Send us a message using the form opposite, or email us.
              </p>
              <form onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="senderFirstName"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Your first name"
                      value={formData.senderFirstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="senderLastName"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Your last name"
                      value={formData.senderLastName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="senderEmail"
                      type="email"
                      autoComplete="email"
                      value={formData.senderEmail}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div> */}
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <span id="phone-description" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="senderPhone"
                      id="phone"
                      value={formData.senderPhone}
                      onChange={handleChange}
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <span id="how-can-we-help-description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="senderMessage"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => {changeSent('Sending...')}}
                  >
                    {isSent}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }