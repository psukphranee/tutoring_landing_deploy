
import { useState, useEffect } from "react";
import library from '../assets/manhattan_library_1.jpg';
import { InputField } from "./components";

  export default function ContactForm() {
  
    const headers = new Headers();
    const endpoint = 'https://lssystemog.execute-api.us-west-1.amazonaws.com/mail_fwd_js'
  
    const [formData, setFormData] = useState({
      senderFirstName: '',
      senderLastName: '',
      senderEmail: '',
      senderPhone: '',
      senderMessage: '',
      senderSubject: '',
      senderServiceInterest: []
    });
  
    const [isSent, changeSent] = useState('Send')
  
    const [resultFromServer, updateResultFromServer] = useState('init');
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
      console.log([event.target.name], ' : ', event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      fetch(endpoint, 
        {
          method : 'POST',
          body: JSON.stringify(
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

    const [checkedValues, setCheckedValues] = useState([]);
    useEffect(() => {
      setFormData({
        ...formData,
        senderServiceInterest: checkedValues
      });
      console.log("checkedValues updated: ", checkedValues);
    }, [checkedValues]);
    

    function handleCheckboxChange(event) {
      const checkbox = event.target;
      const value = checkbox.value;

      
  
      if (checkbox.checked) {
        setCheckedValues(prevCheckedValues => [...prevCheckedValues, value]);
        console.log(value, "selected.")
      } else {
        setCheckedValues(prevCheckedValues => prevCheckedValues.filter(val => val !== value));
        console.log(value, "de-selected.")
      }
    }
  
    return (
      <div className="relative">
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
                Fill out the form below with some preliminary information.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2"> 
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="senderFirstName"
                      id="first-name"
                      autoComplete="given-name"
                      value={formData.senderFirstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* <div>
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
                </div> */}
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
                </div> */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Current Math
                  </label>
                    <select
                      id="senderSubject"
                      name="senderSubject"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue=""
                      onChange={handleChange}
                    >
                      <option value="blank"></option>
                      <option value="Algebra 2">Algebra 2</option>
                      <option value="Trigonometry">Trigonometry</option>
                      <option value="Pre-Calculus">Pre-Calculus</option>
                      <option value="Calculus I (AP Calculus AB)">Calculus I (AP Calculus AB)</option>
                      <option value="Calculus II (AP Calculus BC)">Calculus II (AP Calculus BC)</option>
                  </select>
                </div>

                <fieldset className="space-y-5">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Interested Services
                  </label>
                  <legend className="sr-only">Notifications</legend>
                  
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        value="School GPA Maintenance"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={handleCheckboxChange} 
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700">
                        GPA Maintenance
                      </label>
                      <p id="comments-description" className="text-gray-500">
                        Grade maintenance, homework help, catching up on schoolwork, etc.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        value="Test Prep"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={handleCheckboxChange} 
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="candidates" className="font-medium text-gray-700">
                        Test Preparation
                      </label>
                      <p id="candidates-description" className="text-gray-500">
                        Standardized Test Prep. ACT, SAT, AP Calculus AB/BC, etc
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        value="Supplemental"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={handleCheckboxChange} 
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="offers" className="font-medium text-gray-700">
                      Supplemental
                      </label>
                      <p id="offers-description" className="text-gray-500">
                        Supplement classroom instruction, advance ahead, independent study, etc.
                      </p>
                    </div>
                  </div>
                </fieldset>


                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      Addtional Comments
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