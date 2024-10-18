import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from "../../assets/images/loading.png"

function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmitSignUp(e) {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      localStorage.setItem("signUp", JSON.stringify(data))
      navigate('/sign-up')
    }, 1000)
  }

  return (
    <div className='text-center flex flex-col pt-[63px] items-center'>
      <h2 className='text-[25px] font-bold text-white mt-5'>Sign Up</h2>
      <form onSubmit={handleSubmitSignUp} className='w-[362px] mt-[10px]' autoComplete='off'>
        <label className='flex flex-col'>
          <span className='text-[15px] text-white mb-[17px]'>New Email</span>
          <input required className='py-[23px] pl-[34px] rounded-[100px]' type="email" placeholder='Email' name='email' />
        </label>
        <label className='flex flex-col mt-[27px]'>
          <span className='text-[15px] text-white mb-[17px]'>New Password</span>
          <input required className='py-[23px] pl-[34px] rounded-[100px]' type="password" placeholder='Password' name='password' />
        </label>
        <Link className='text-white my-5 block text-center hover:text-[#FD749B]' to="/sign-up">Sign In</Link>
        <button type="submit" className='py-[23px] pl-[34px] rounded-[100px]'>
          {isLoading ? <img className='scale-[2] mx-auto' src={Loading} alt="Loading" width={30} /> : "Sign Up"}
        </button>
      </form>
    </div>
  )
}

export default SignIn
