import React, { useContext } from 'react'
import scrollTop from '../helpers/scrollTop'
import displayINR from '../helpers/displayCurrency'
import Context from '../context'
import addToCart from '../helpers/addToCart'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const VerticalCard = ({loading, data = []}) => {
    const loadingList = new Array(13).fill(null)
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

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,250px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all'>
    {
         loading ? (
             loadingList.map((product, index)=>{
                 return(
                     <div className='w-full min-w-[220px]  md:min-w-[250px] max-w-[220px] md:max-w-[250px]  bg-white rounded-sm shadow' key={index}>
                         <div className='bg-slate-200 h-48 p-4 min-w-[220px] md:min-w-[250px] flex justify-center items-center animate-pulse'>
                         </div>
                         <div className='p-4 grid gap-3'>
                             <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                             <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2'></p>
                             <div className='flex gap-3'>
                                 <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2'></p>
                                 <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2'></p>
                             </div>
                             <button className='text-sm  text-white px-3  rounded-full bg-slate-200  py-2 animate-pulse'></button>
                         </div>
                     </div>
                 )
             })
         ) : (
             data.map((product,index)=>{
                 return(
                     <Link to={"/product/"+product?._id} className='w-full min-w-[220px]  md:min-w-[250px] max-w-[220px] md:max-w-[250px]  bg-white rounded-sm shadow' key={index} onClick={scrollTop}>
                         <div className='bg-slate-200 h-48 p-4 min-w-[220px] md:min-w-[250px] flex justify-center items-center'>
                             <img src={product?.image[0]} loading='lazy' alt={product?.productName} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'/>
                         </div>
                         <div className='p-4 grid gap-3'>
                             <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                             <p className='capitalize text-slate-500'>{product?.brand}</p>
                             <div className='flex gap-3'>
                                 <p className='text-red-600 font-medium'>{ displayINR(product?.sellingPrice) }</p>
                                 <p className='text-slate-500 line-through'>{ displayINR(product?.price)  }</p>
                             </div>
                             <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-12 py-1 rounded-full mx-auto' onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart</button>
                         </div>
                     </Link>
                 )
             })
         )
         
     }
    </div>
  )
}

export default VerticalCard