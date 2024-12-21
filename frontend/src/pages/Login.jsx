import React, { useState } from 'react'
import loginIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt="login icon" />
                </div>

                <form action="" className='pt-6'>
                    <div >
                        <label htmlFor="email">Email: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type="email" name="email" placeholder='enter email' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div >
                        <label htmlFor="password">Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder='enter password' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                            Forgot password ?
                        </Link>
                    </div>

                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                </form>
                <p className='my-5'>Don't have account ? <Link to={'/sign-up'} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login