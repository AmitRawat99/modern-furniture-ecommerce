import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import signup from '../assets/images/Account/sign_account.png';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.scss';
import Base_url from '../config/Base_Url'

function Signup() {

    const userNavigate = useNavigate()


    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userNumber: "",
        userPassword: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { userName, userEmail, userNumber, userPassword } = formData;

            const response = await fetch(`${Base_url}/register`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            

            if (!userName || !userEmail || !userNumber || !userPassword) {
                alert("All Fields Are Requred")
            }
            userNavigate('/login')
        }
        catch (error) {
            console.log("Error During Fetch", error)
        }
    }

    console.log(formData);
    


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="form-container">
                            <div className="form-section">
                                <Form >
                                    <Form.Group className='mb-3'>
                                        <Form.Label  >User Name</Form.Label>
                                        <Form.Control onChange={handleChange} name='userName' type="text" placeholder='Enter User Name' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control onChange={handleChange} name='userEmail' type="email" placeholder='Enter User Email' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label >Number</Form.Label>
                                        <Form.Control onChange={handleChange} name='userNumber' type="number" placeholder='Enter User Number' />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label >Password</Form.Label>
                                        <Form.Control onChange={handleChange} name='userPassword' type="password" placeholder='Enter Password' />
                                    </Form.Group>
                                    <Button onClick={handleSubmit} className="mt-3 w-100" >Sign In</Button>
                                </Form>
                                <div className="switch-signup">
                                    <p>Don't have an account? <Link to="/login">Log In</Link></p>
                                </div>
                            </div>
                            <div className="from-container-img">
                                <img  src={signup} loading="lazy"  alt="Login" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup