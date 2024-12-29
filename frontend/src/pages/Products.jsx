import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import summaryApi from '../common'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [products, setProducts] = useState([])

  const fetchProducts = async()=>{
    const response = await fetch(summaryApi.products.url,{
      method: summaryApi.products.method,
      credentials: 'include'
    })
    const dataResponse = await response.json()

    setProducts(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
      <div className='bg-white px-4 py-2 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>Products</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all px-3 py-1 rounded-full' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          products.map((product, index)=>{
            return(
              <ProductCard data={product} key={index} fetchdata={fetchProducts}/>
            )
          })
        }
      </div>

      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchdata={fetchProducts} />
        )
      }
    </div>
  )
}

export default Products