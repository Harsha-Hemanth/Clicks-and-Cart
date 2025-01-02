import React from 'react'

const Orders = () => {
  return (
    <div className='p-3'>
      <div className='bg-white px-4 py-2 flex justify-center items-center'>
        <h2 className='font-bold text-lg'>Orders</h2>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-5 py-4 h-[calc(100vh-212px)] overflow-y-scroll'>
        <p className='text-lg font-bold'>No orders yet!</p>
      </div>
    </div>
  )
}

export default Orders