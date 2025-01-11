import React, { useEffect, useState } from 'react'
import summaryApi from '../common'
import moment from 'moment'
import displayINR from '../helpers/displayCurrency'

const Orders = () => {
  const [data, setData] = useState([])

    const fetchOrders = async()=>{
        const response = await fetch(summaryApi.orders.url,{
            method: summaryApi.orders.method,
            credentials: 'include'
        })
        const responseData = await response.json()
        setData(responseData.data)
    }

    useEffect(()=>{
        fetchOrders()
    },[])
  return (
    <div className='h-[calc(100vh-212px)] overflow-y-scroll'>
        {
            !data[0] && (
                <p className='font-semibold text-lg'>No Orders Yet!</p>
            )
        }
        <div className='p-4 w-full'>
            {
                data.map((item, index)=>{
                    return(
                        <div key={index+"item"}>
                            <p className='font-medium text-lg'>{moment(item.createdAt).format('LL')}</p>
                            <div className='border rounded p-2'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                            <div className='grid gap-1'>
                                {
                                    item?.productDetails.map((product, index)=>{
                                        return(
                                            <div key={index+"product"} className='flex gap-3 bg-slate-100'>
                                                <img className='w-20 h-20 bg-slate-200 object-scale-down p-2' src={product.image[0]} alt="product" />
                                                <div>
                                                    <p className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</p>
                                                    <div className='flex items-center gap-5 mt-1'>
                                                        <p className='text-lg text-red-500'>{displayINR(product.price)}</p>
                                                        <p>Quantity: {product.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-col gap-4 p-2 min-w-[300px]'>
                                <div>
                                    <p className='text-lg font-medium'>Payment Details: </p>
                                    <p className='ml-1'>Payment methos: {item.paymentDetails.payment_method_type[0]}</p>
                                    <p className='ml-1'>Payment Status: {item.paymentDetails.payment_status}</p>
                                </div>
                                <div>
                                    <p className='text-lg font-medium'>Shipping Details</p>
                                    {
                                        item.shipping_options.map((shipping, index)=>{
                                            return(
                                                <p className='ml-1' key={index+"shipping"}>Shipping Amount: {shipping.shipping_amount}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            </div>
                            <p className='font-semibold ml-auto w-fit lg:text-lg'>Total Amount: {item.totalAmount}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Orders