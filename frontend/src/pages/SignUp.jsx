import React, { useState } from 'react'
import loginIcon from '../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
      const [data, setData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          profilePic: '',
      })
  
      const handleOnChange = (e)=>{
          const {name, value} = e.target
  
          setData((preve)=>{
              return{
                  ...preve,
                  [name]: value
              }
          })
      }

      const handleUploadPic = async(e)=>{
        const file = e.target.files[0]
        const imagePic = await imageTobase64(file)
        setData((preve)=>{
          return{
            ...preve,
            profilePic: imagePic
          }
        })
      }
  
      const handleSubmit = (e)=>{
          e.preventDefault()
      }
  
  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                    <div>
                      <img src={data.profilePic || loginIcon} alt="login icon" />
                    </div>
                    <form>
                      <label>
                        <div className='absolute text-center text-xs bg-slate-200 bg-opacity-80 pb-4 pt-2 cursor-pointer bottom-0 w-full'>
                          Upload Photo
                        </div>
                        <input type="file" className='hidden' onChange={handleUploadPic}/>
                      </label>
                    </form>
                </div>

                <form onSubmit={handleSubmit} className='pt-6 flex flex-col gap-2'>
                    <div >
                        <label htmlFor="name">Name: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type="text" name="name" required value={data.name} onChange={handleOnChange} placeholder='enter your name' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div >
                        <label htmlFor="email">Email: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type="email" name="email" required value={data.email} onChange={handleOnChange} placeholder='enter email' className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div >
                        <label htmlFor="password">Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" : "password"} required name="password" value={data.password} onChange={handleOnChange} placeholder='enter password' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    <div >
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showConfirmPassword ? "text" : "password"} required name="confirmPassword" value={data.confirmPassword} onChange={handleOnChange} placeholder='enter confirm password' className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showConfirmPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6'>Sign up</button>
                </form>
                <p className='my-5'>Already have account ? <Link to={'/login'} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            </div>
        </div>
    </section>
  )
}

export default SignUp