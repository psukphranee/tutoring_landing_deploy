import React from 'react'

const InputField = () => {
  return (
    <div>
        <input
            type="text"
            name="senderFirstName"
            id="first-name"
            autoComplete="given-name"
            placeholder="Your first name"
            // value={formData.senderFirstName}
            // onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
  )
}

export default InputField