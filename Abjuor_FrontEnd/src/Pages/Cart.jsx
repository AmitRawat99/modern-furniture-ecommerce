import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import '../styles/Cart.scss'
import { MdDelete } from "react-icons/md";
import Checkout from '../payment/Checkout'
import { Navigate, useNavigate } from 'react-router-dom';


function Cart() {
   const  navigateUrl = useNavigate()

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const ProductData = JSON.parse(localStorage.getItem("cartItem") || "[]")
        setCartItems(ProductData)
    }, [])
    console.log(cartItems);


    const handleRemoveItem = (indexToRemove) => {
        alert("remove this")
        const updatedCart = cartItems.filter((item, index) => index !== indexToRemove);

        setCartItems(updatedCart)
        localStorage.setItem("cartItem", JSON.stringify(updatedCart))
    }

    const gst = 0.18;
    const totalPrice = cartItems.reduce((total, item) => {
        const priceNum = Number(item.productPrice.toString().replace(/,/g, ''));
        const qtyNum = Number(item.productQty);
        return total + priceNum * qtyNum;
    }, 0);

    const totalPriceWithGst = totalPrice + (totalPrice * gst)

    const paymnet = (e) =>{
        e.preventDefault()
        navigateUrl(`/payment?amount=${totalPriceWithGst.toFixed(2)}`);
    }

    return (
        <Container className="mt-5">
            {
                cartItems.length === 0 ? (
                    <p className='cart-empty'>Cart Is Empty</p>
                ) : (
                    <Row>
                        <h2 className="mb-4 mt-3 shoping-cart text-center">Shopping Cart</h2>

                        {/* Left Side: Product Details */}

                        <Col className='mt-5' md={8}>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td><img  className='add-product-img' src={item.productImg} loading="lazy" alt={item.name} width="50" /></td>
                                            <td className='product-name'>{item.productName}</td>
                                            <td>₹{item.productPrice}</td>
                                            <td>{item.productQty}</td>
                                            <td><MdDelete size={22} className='remove-btn' onClick={() => handleRemoveItem(index)} style={{ color: "black" }} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>

                        {/* Right Side: Summary */}

                        <Col className='mt-5' md={4}>
                            <Card className="p-4 shadow-sm">
                                <h4 className="mb-3 order">Order Summary</h4>
                                <p><strong>Total Items:</strong> {cartItems.length}</p>
                                <p><strong>GST : </strong>18%</p>
                                <p><strong>Total Price:</strong> ₹{totalPriceWithGst.toFixed()}</p>
                                <Button variant="success" className="mt-3 w-100" onClick={paymnet} >Proceed to Checkout</Button>
                            </Card>
                        </Col>

                    </Row>
                )
            }

        </Container>
    );
}

export default Cart;
