import React from 'react'

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter title"
    />
  )
}

export default Input
