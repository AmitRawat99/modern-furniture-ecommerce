import React, { useEffect, useContext, useRef, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import loginImg from '../assets/images/Account/login_account.png';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.scss';
import Base_Url from '../config/Base_Url';
import UserContext from '../context/UserContext';

function Login() {
    const userNavigate = useNavigate()

    const [login, setLogin] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
    })

    const { setUser } = useContext(UserContext)

    localStorage.setItem("login", JSON.stringify(login.userName, login.userEmail))

    const handleChange = (e) => {
        setLogin((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };



    const LoginAccount = async () => {
        const { userName, userEmail, userPassword, } = login;

        if (!userName || !userEmail || !userPassword) {
            alert("All Fields Are Required");
            return;
        }

        try {
            const response = await fetch(`${Base_Url}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login),
                credentials: "include"
            });
            const data = await response.json();
            console.log(data);

            if (response.ok && data.success) {
                const userId = data.user.userId || data.user.userId
                
                localStorage.setItem("userId", userId)
                console.log("Login Successfully", userId);
                localStorage.setItem("UserData", JSON.stringify(data.user));
                setUser(data.user)
                userNavigate('/');
            } else {
                console.log("Incorrect Email & Password");
                alert("Incorrect Email & Password")
            }
        } catch (error) {
            console.log("Error Fetching Data", error);
            alert("Something went wrong");
        }
    };


    return (
        <Container>
            <Row>
                <Col>
                    <div className="form-container">
                        <div className="form-section">
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control name='userName' onChange={handleChange} type="text" placeholder='Enter User Name' />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name='userEmail' onChange={handleChange} type="email" placeholder='Enter User Number' />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='userPassword' onChange={handleChange} type="password" placeholder='Enter Password' />
                                </Form.Group>
                                <Button className="mt-3 w-100" onClick={LoginAccount}>Login</Button>
                            </Form>
                            <div className="switch-signup">
                                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                        </div>
                        <div className="from-container-img">
                            <img src={loginImg} alt="Login" loading="lazy" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
