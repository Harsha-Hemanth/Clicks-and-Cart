import React from 'react'
import successImg from '../assets/success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='bg-blue-400 w-full max-w-md mx-auto flex flex-col justify-center items-center p-4 m-2 rounded'>
        <img src={successImg} alt="success" width={150} height={150} />
        <p className='text-green-300 font-bold text-xl'>Payment Successful</p>
        <Link to={"/myorders"} className='p-2 px-3 mt-5 border-2 border-green-300 rounded font-semibold text-green-300 hover:bg-green-300 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success