import React, { useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import summaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';


const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const [menuDisplay, setMenuDisplay] = useState(false)
    const navigate = useNavigate() 

    const handleLogout = async()=>{
        const fetchData = await fetch(summaryApi.logout.url,{
            method: summaryApi.logout.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if (data.success){
            toast.success(data.message)
            dispatch(setUserDetails(null))
            navigate('/')
        } else {
            toast.error(data.message)
        }
    }
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto px-4 flex items-center justify-between'>
            <div className='h-full flex items-center'>
                <Link to={"/"}>
                    <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full pl-2 focus-within:shadow'>
                <input type='text' placeholder='search here ...' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full'>
                    <FaSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>

                <div className='text-2xl relative'>
                    <span><FaShoppingCart /></span>

                    <div className='text-white bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-sm'>0</p>
                    </div>
                </div>

                <div>
                    {
                        user?._id ? (
                            <div className='relative flex justify-center'>
                                <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
                                    {
                                        user?.profilePic ? (
                                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                                        ) : (
                                            <FaRegCircleUser />
                                        )
                                    }
                                </div>

                                {
                                    menuDisplay && (
                                    <div className='absolute bg-white top-11 bottom-0 h-fit p-2 shadow-lg rounded'>
                                        <nav>
                                            <Link to={"profile"} className='whitespace-nowrap hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Profile</Link>
                                            <button onClick={()=>{setMenuDisplay(preve => !preve); handleLogout()}} className='whitespace-nowrap hover:bg-slate-100 p-2'>Logout</button>
                                        </nav>
                                    </div>
                                    )
                                }
                            </div>
                        ) : (
                            <Link to={"login"} className='bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700'>Login</Link>
                        )
                    }
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header