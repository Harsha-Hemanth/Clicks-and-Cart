import React, { useEffect, useState } from 'react'

import img1 from '../assets/banner/img1.webp'
import img2 from '../assets/banner/img2.webp'
import img3 from '../assets/banner/img3.jpg'
import img4 from '../assets/banner/img4.jpg'
import img5 from '../assets/banner/img5.webp'

import img1_mobile from '../assets/banner/img1_mobile.jpg'
import img2_mobile from '../assets/banner/img2_mobile.webp'
import img3_mobile from '../assets/banner/img3_mobile.jpg'
import img4_mobile from '../assets/banner/img4_mobile.jpg'
import img5_mobile from '../assets/banner/img5_mobile.png'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const img = [img1, img2, img3, img4, img5]
    const imgMobile = [img1_mobile, img2_mobile, img3_mobile, img4_mobile, img5_mobile]

    const nextImage = ()=>{
        if(img.length-1>currentImage){
            setCurrentImage(preve=>preve+1)
        }
    }

    const preveImage = ()=>{
        if (currentImage!=0){
            setCurrentImage(preve=>preve-1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            if(img.length-1>currentImage){
                nextImage()
            } else{
                setCurrentImage(0)
            }
        },5000)

        return ()=>clearInterval(interval)
    },[currentImage])
  return (
    <div className='container mx-auto px-4 rounded'>
        <div className='h-44 md:h-72 w-full bg-slate-200 relative'>

            <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                <div className='flex justify-between w-full text-2xl'>
                    <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                    <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button>
                </div>
            </div>

            <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                    img.map((image, index)=>{
                        return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={image} style={{transform: `translateX(-${currentImage * 100}%`}} >
                                <img src={image} alt="banner" className='w-full h-full object-fit' />
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        imgMobile.map((image,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={image} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={image} className='w-full h-full object-fit'/>
                            </div>
                            )
                        })
                }
            </div>

        </div>
    </div>
  )
}

export default BannerProduct