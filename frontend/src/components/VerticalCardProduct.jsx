import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryProducts from '../helpers/fetchCategoryProducts'
import displayINR from '../helpers/displayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'
import scrollTop from '../helpers/scrollTop'
import { toast } from 'react-toastify';

const VerticalCardProduct = ({category, heading}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const loadingList = new Array(13).fill(null)
    const scrollElement = useRef()

    const { fetchCartCount } = useContext(Context)

    const handleAddToCart = async(e, id)=>{
        const responseData = await addToCart(e, id)
        if (responseData.success){
            toast.success(responseData.message)
            fetchCartCount()
        } else{
            toast.error(responseData.message)
        }
    }

    const fetchData = async()=>{
        setLoading(true)
        const categoryProducts = await fetchCategoryProducts(category)
        setLoading(false)

        setData(categoryProducts?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const scrollRight = ()=>{
        scrollElement.current.scrollLeft += 300
    }

    const scrollLeft =()=>{
        scrollElement.current.scrollLeft -= 300
    }
  return (
    <div className='container mx-auto px-4 my-6 relative'>
        <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

        <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement} >
            <button onClick={scrollLeft} className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block'><FaAngleLeft/></button>
            <button onClick={scrollRight} className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block'><FaAngleRight/></button>
            {
                loading ? (
                    loadingList.map((product,index)=>{
                        return(
                            <div className='w-full min-w-[220px] md:min-w-[250px] max-w-[220px] md:max-w-[250px] bg-white rounded-sm shadow' key={index}>
                                <div className='bg-slate-200 h-48 p-4 min-w-[220px] md:min-w-[250px] flex justify-center items-center animate-pulse'>
    
                                </div>
                                <div className='p-4 grid gap-3'>
                                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black py-2 bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                    <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full py-2'></p>
                                    <div className='flex gap-3'>
                                        <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full py-2'></p>
                                        <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full py-2'></p>
                                    </div>
                                    <button className='text-sm  text-white px-3 py-2 rounded-full bg-slate-200 animate-pulse'></button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((product, index)=>{
                        return(
                            <Link to={"/product/"+product._id} className='w-full min-w-[220px] md:min-w-[250px] max-w-[220px] md:max-w-[250px] bg-white rounded-sm shadow' key={index} onClick={scrollTop}>
                                <div className='bg-slate-200 h-48 p-4 min-w-[220px] md:min-w-[250px] flex justify-center items-center'>
                                    <img src={product.image[0]} loading='lazy' alt={product.productName} className='h-full object-scale-down hover:scale-110 transition-all mix-blend-multiply' />
                                </div>
                                <div className='p-4 grid gap-3'>
                                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.brand}</p>
                                    <div className='flex gap-3'>
                                        <p className='text-red-600 font-medium'>{displayINR(product?.sellingPrice)}</p>
                                        <p className='text-slate-500 line-through'>{displayINR(product?.price)}</p>
                                    </div>
                                    <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-12 py-1 rounded-full mx-auto' onClick={(e)=>handleAddToCart(e, product._id)}>Add to Cart</button>
                                </div>
                            </Link>
                        )
                    })
                )
            }
        </div>
    </div>
  )
}

export default VerticalCardProduct