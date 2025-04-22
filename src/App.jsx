import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import About from './pages/About'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBox from './components/SearchBox.jsx'
import { ToastContainer, } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBox />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Order />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='place-order' element={<PlaceOrder />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
