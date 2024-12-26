import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import summaryApi from './common'
import Context from './context'

function App() {
  
  const fetchUserDetails = async()=>{
      const dataResponse = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: 'include'
      })
      const dataApi = await dataResponse.json()
  } 

  useEffect(()=>{
    fetchUserDetails()
  },[])

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails
    }}>
      <ToastContainer />
      <Header/>
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet/>
      </main>
      <Footer/>
    </Context.Provider>
    </>
  )
}

export default App
