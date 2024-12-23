import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
    <Header/>
    <main className='min-h-[calc(100vh-120px)]'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
