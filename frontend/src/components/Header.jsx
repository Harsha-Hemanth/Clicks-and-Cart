import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import summaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import role from '../common/role';
import Context from '../context';
import scrollTop from '../helpers/scrollTop';


const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const [menuDisplay, setMenuDisplay] = useState(false)
    const navigate = useNavigate()
    const context = useContext(Context)
    const searchInput = useLocation()
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")
    const [search, setSearch] = useState(searchQuery)

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

    const handleSearch = (e)=>{
        const { value } = e.target
        setSearch(value)
        if (value){
            navigate(`/search?q=${value}`)
        } else{
            navigate('/search')
        }
    }
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-20'>
        <div className='h-full container mx-auto px-4 flex items-center justify-between'>
            <div className='h-full flex items-center'>
                <Link to={"/"} onClick={scrollTop}>
                    <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full pl-2 focus-within:shadow'>
                <input type='text' placeholder='search here ...' className='w-full outline-none' onChange={handleSearch} value={search}/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full'>
                    <FaSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>

                {
                    user?._id && (
                        <Link to={"/cart"} className='text-2xl relative'>
                            <span><FaShoppingCart /></span>

                            <div className='text-white bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                                <p className='text-sm'>{context?.cartCount}</p>
                            </div>
                        </Link>
                    )
                }

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
                                    <div className='absolute flex flex-col bg-white top-11 bottom-0 h-fit p-2 shadow-lg rounded z-30'>
                                        <nav>
                                            {
                                                (user?.role === role.admin) && (
                                                    <Link to={"admin-panel"} className='whitespace-nowrap hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                                                )
                                            }
                                            <Link to={"/myorders"} className='whitespace-nowrap hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>My Orders</Link>
                                            <button onClick={()=>{setMenuDisplay(preve => !preve); handleLogout()}} className='w-full whitespace-nowrap hover:bg-slate-100 p-2'>Logout</button>
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