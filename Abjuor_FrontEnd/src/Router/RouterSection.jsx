import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Layout from '../components/Layout/Layout'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product_Details from '../Share/Product_Details'
import Product_Dashboard from '../Pages/Product_Dashboard'
import Cart from '../Pages/Cart'
import UserAccount from '../Share/UserAccount'
import Review from '../Share/Reviews'
import Checkout from '../payment/Checkout'
import Order from '../Share/Order'
import Shop from '../Pages/Shop'

function RouterSection() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/logout' element={<Login />} />
                    <Route path='/profile' element={<UserAccount />} />
                    <Route path="/payment" element={<Checkout/>} />
                    <Route path="/order" element={<Order/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path='/product-category/:mainCategory/:category' element={<Product_Dashboard />} />
                    <Route path="/product-category/:mainCategory/:category/:id" element={<Product_Details />} />
                </Routes>
            </Layout>
        </>
    )
}

export default RouterSection