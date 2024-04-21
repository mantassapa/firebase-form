import React, { useState } from 'react'
import { db } from '../configs/firebase_config'
import { collection, addDoc } from '@firebase/firestore'

const Form = ({showForm, setShowForm}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    question: ""
  })

  const handleChange=(el)=>{
    const {name, value} = el.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  
  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addDoc(collection(db, "form-data"),form)

    setShowForm(0)
    setForm({
      name: "",
      email: "",
      question: ""
    })
    alert("Form submited, thank you")
  }

  if(showForm===1){
    return (
      <div className='contact_form'>
        <button onClick={()=>setShowForm(0)}>Close</button>
        <form onSubmit={handleSubmit}>
            <h3>Contact-form</h3>
            <label htmlFor="input_name" >Name:</label>
            <input type="text" id='input_name' value={form.name} onChange={handleChange} name="name" required/>
            <label htmlFor="input_email">Email:</label>
            <input type="email" id='input_email' value={form.email} onChange={handleChange} name='email' required/>
            <label htmlFor="input_textarea">Question:</label>
            <textarea id="input_textarea" value={form.question} onChange={handleChange} name='question' required></textarea>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form