import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import Oauth from "../components/Oauth"

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign in</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] md:mb-6 mb-12'>
          <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form  action="">
            <input  type="email" value={email} id='email' placeholder='Email Address' onChange={onChange} className='w-full mb-6 px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out'/>
            <div className='relative mb-6'>
              <input  type={showPassword ? "text": "password"} value={password} id='password' placeholder='Password' onChange={onChange} className='w-full px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out'/>
              {
                showPassword ? (
                  <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                ):(<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>)
              }
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Don't have an account?
                <Link className='text-red-400 hover:text-red-700 transition duration-200 ease-in-out' to="/SignUp"> Register</Link>
              </p>
              <p><Link className='text-blue-400 hover:text-blue-700 transition duration-200 ease-in-out' to="/ForgotPass">Forgot Password?</Link></p>
            </div>
            <button className='w-full bg-blue-400 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover: bg-blue-700 transition duration-150 ease-in-out hover: shadow-lg active:bg-blue-800' type='submit'>Sign in</button>
          <div className="my-4 items-center flex before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300">
            <p className="text-center font-semibold mx-4">
              OR
            </p>
            </div>
            <Oauth/>
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default Signin