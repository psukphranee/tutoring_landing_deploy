import { useState } from 'react'


const Form = () => {

  const endpoint = 'https://1pmu7gfk1m.execute-api.us-west-1.amazonaws.com/default/mail_fwd_js'
  const endpoint2 = 'https://i2eql7miah.execute-api.us-west-1.amazonaws.com/default/mail_fwd_js'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [serverResponse, updateResponse] = useState('0');

  const handleSubmit = event => {
    // prevent the form submit from refreshing the page
    event.preventDefault()

    const { name, email, message } = formData

    // const body = JSON.stringify({
    //   senderName: name.value,
    //   senderEmail: email.value,
    //   message: message.value
    // });

    // const body = ;
    
    const requestOptions = {
      method : "POST",
      body: {
        senderName : "local",
        senderEmail : "localnamo@trains.com",
        message : "localI love trains!"
      }
    }

    console.log(JSON.stringify(requestOptions));

    fetch(endpoint, requestOptions).then(
      (response) => {
        if (!response.ok) throw new Error("Error in fetch");
          return response.json();
        })
        .then(
          (response) => {
            updateResponse("Email sent successfully!");
          console.log("Email sent successfully!");
        })
        .catch(
          (error) => {
            updateResponse("An unkown error occured.");
            console.log("An unkown error occured.", error);
        })
        
        

    
    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Message: ', message)
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div>
      `<form onSubmit={handleSubmit} className='flex flex-col w-full items-center p-2 max-w-2xl border-2 border-black'>
          <div className='w-full'>
              <label>
              Name:
              <br/>
              <input type="text" name="name" onChange={handleChange} className='outline my-2 w-full'/>
              </label>
          </div>
          <div className='w-full'>
              <label>
              Email:
              <br/>
              <input type="email" name="email" onChange={handleChange} className='outline my-2 w-full'/>
              </label>
          </div>
          <div className='w-full'>
              <label>
              Message:
              <br/>
              <textarea name="message" onChange={handleChange} className='outline my-2 w-full'/>
              </label>
          </div>
          <div>
              <button type="submit" className="btn-primary m-2 outline">Submit</button>
          </div>
      </form>
      <p>
        {serverResponse}
      </p>
    </div>
  )
}

export default Form
