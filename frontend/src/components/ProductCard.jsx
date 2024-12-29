import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import EditProduct from './EditProduct';
import displayINR from '../helpers/displayCurrency';

const ProductCard = ({data, fetchdata}) => {
    const [editProduct, setEditProduct] = useState(false)
  return (
    <div className='bg-white p-4 rounded'>
        <div className='w-40'>
            <div className='w-fit ml-auto bg-slate-200 p-1 rounded-full cursor-pointer hover:bg-black hover:text-slate-200 transition-all' onClick={()=>setEditProduct(true)}>
                <MdEdit />
            </div>
            <img src={data?.image[0]} className='mx-auto' alt="product image" width={120} height={120} />
            <h1>{data?.productName}</h1>
            <div>
                {
                    displayINR(data?.sellingPrice)
                }
            </div>
        </div>
        {
            editProduct && (
                <EditProduct onClose={()=>setEditProduct(false)} productData={data} fetchdata={fetchdata} />
            )
        }
    </div>
  )
}

export default ProductCard