import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";

const UploadProduct = ({onClose}) => {
    const [data, setData] = useState({
        productName: "",
        brand: "",
        category: "",
        image: [],
        description: "",
        price: "",
        sellingPrice: ""
    })
    
    const [viewImage, setViewImage] = useState("")
    const [openViewImage, setOpenViewImage] = useState(false)
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }

    const handleUploadImage = async(e)=>{
        const file = e.target.files[0]
        const uploadImageCloudinary = await uploadImage(file)

        setData((preve)=>{
            return {
                ...preve,
                image: [...preve.image, uploadImageCloudinary.url]
            }
        })
    }

    const handleDeleteImage = async(index)=>{
        const newImage = [...data.image]
        newImage.splice(index, 1)
        setData((preve)=>{
            return {
                ...preve,
                image: [...newImage]
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Upload Product</h2>
                <div className='text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                    <CgClose />
                </div>
            </div>

            <form className='grid p-4 gap-2 h-full overflow-y-scroll pb-5' onSubmit={handleSubmit}>
                <label htmlFor="productName">Product Name: </label>
                <input type="text" 
                    id='productName' 
                    placeholder='enter product name'
                    name='productName' 
                    value={data.productName} 
                    onChange={handleOnChange}
                    className='w-full p-2 border border-gray-400 rounded'
                />

                <label htmlFor="brand" className='mt-3'>Brand: </label>
                <input type="text" 
                    id='brand' 
                    placeholder='enter brand name'
                    name='brand' 
                    value={data.brand} 
                    onChange={handleOnChange}
                    className='w-full p-2 border border-gray-400 rounded'
                />

                <label htmlFor="category" className='mt-3'>Category: </label>
                <select name="category" value={data.category} className='w-full p-2 border border-gray-400 rounded' onChange={handleOnChange}>
                <option value="">Select Category</option>
                    {
                        productCategory.map((el, index)=>{
                            return (
                                <option value={el.value} key={el.id}>{el.name}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="image" className='mt-3'>Image: </label>
                <label htmlFor="uploadImage">
                    <div className='w-full p-2 border border-gray-400 rounded h-32 flex justify-center items-center cursor-pointer'>
                        <div className='text-gray-500 flex justify-center items-center flex-col gap-2'>
                            <span className='text-4xl'><FaCloudUploadAlt /></span>
                            <p className='text-sm'>Upload Product Image</p>
                            <input type="file" id='uploadImage' className='hidden' onChange={handleUploadImage}/>
                        </div>
                    </div>
                </label>
                <div>
                    {
                        data?.image[0] ? (
                            <div className='flex items-center gap-2'>
                                {data.image.map((el,index)=>{
                                    return (
                                        <div className='relative group'>
                                            <img src={el} onClick={()=>{setOpenViewImage(true); setViewImage(el)}} width={80} height={80} className='border cursor-pointer' alt={el} />
                                            <div className='absolute bottom-0 right-0 p-1 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteImage(index)}>
                                                <MdDelete/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className='text-red-600 text-xs'>*Product image required</p>
                        )
                    }
                </div>

                <label htmlFor="description" className='mt-3'>Description: </label>
                <textarea name="description" id="description" value={data.description} rows={3} className='h-28 resize-none border border-gray-400 p-2 rounded' placeholder='enter product description' onChange={handleOnChange}>

                </textarea>

                <label htmlFor="price" className='mt-3'>Price: </label>
                <input type="number" 
                    id='price' 
                    placeholder='enter price'
                    name='price' 
                    value={data.price} 
                    onChange={handleOnChange}
                    className='w-full p-2 border border-gray-400 rounded'
                />

                <label htmlFor="sellingPrice" className='mt-3'>Selling Price: </label>
                <input type="number" 
                    id='sellingPrice' 
                    placeholder='enter selling price'
                    name='sellingPrice' 
                    value={data.sellingPrice} 
                    onChange={handleOnChange}
                    className='w-full p-2 border border-gray-400 rounded'
                />

                <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Upload Product</button>
            </form>
        </div>

        {
            openViewImage && (
                <DisplayImage onClose={()=>setOpenViewImage(false)} imageUrl={viewImage}/>
            )
        }
    </div>
  )
}

export default UploadProduct