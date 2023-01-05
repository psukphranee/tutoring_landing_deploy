import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = event => {
    // prevent the form submit from refreshing the page
    event.preventDefault()

    const { name, email, message } = formData
    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Message: ', message)
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full items-center p-2 max-w-2xl border-2 border-black'>
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

  )
}

export default Form
