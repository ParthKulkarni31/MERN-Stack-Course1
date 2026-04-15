import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder='Enter Name' />
        <input type="text" placeholder='Enter Email' />
        <input type="text" placeholder='Enter Password' />

        <button>Register</button> 

        <p className='text-danger'>Already have an account? <a href='/'>Login</a></p>
      </form>
    </div>
  )
}

export default Register