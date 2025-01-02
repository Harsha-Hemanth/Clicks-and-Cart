import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import summaryApi from './common'
import Context from './context'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice'

function App() {
  const dispatch = useDispatch()
  const [cartCount, setCartCount] = useState(0)
  
  const fetchUserDetails = async()=>{
      const dataResponse = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: 'include'
      })
      const dataApi = await dataResponse.json()
      if (dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }
  } 

  const fetchCartCount = async()=>{
    const dataResponse = await fetch(summaryApi.countCartProducts.url, {
      method: summaryApi.countCartProducts.method,
      credentials: 'include'
    })
    const dataApi = await dataResponse.json()
    setCartCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    fetchUserDetails()
    fetchCartCount()
  },[])

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails,
      fetchCartCount,
      cartCount
    }}>
      <ToastContainer position='top-center'/>
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        <Outlet/>
      </main>
      <Footer/>
    </Context.Provider>
    </>
  )
}

export default App
