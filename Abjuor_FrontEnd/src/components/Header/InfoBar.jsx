import React, { useState } from 'react';
import '../../styles/InfoBar.scss';
import { Container } from 'react-bootstrap';
import { FaCartPlus, FaUserCheck } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import logo from '../../assets/images/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import NavBar from './NavBar';
import { FaRectangleXmark } from "react-icons/fa6";


function InfoBar({ clickForNav }) {
    const navigateUrl = useNavigate();
    const [inputValue, setInputValue] = useState(false)
    const [searchValue, setSearchValue] = useState('')


    const navigateCart = () => {
        navigateUrl('/cart');
    };

    const searchNavigate = () => {
        if (!searchValue || searchValue.trim() == "") {
            alert("Please enter a search term before searching the products.");
        } else {
            navigateUrl(`/shop?search-items=${searchValue.toLowerCase()}`);
            setSearchValue('')
        }
    };


    const toggleInput = () => {
        setInputValue(!inputValue)
    }


    const cartItems = JSON.parse(localStorage.getItem("cartItem")) || []


    return (
        <>
            <div className="info-bar">
                <Container className="d-flex justify-content-between align-items-center">

                    {/* Left: Logo */}

                    <div className="logo-area">
                        <Link to={'/'}><img src={logo} alt="Logo" className="info-logo" /></Link>
                    </div>

                    {/* Center: Marquee */}

                    <div className="marquee-area flex-grow-1 px-3">
                        {
                            inputValue ? (
                                <marquee behavior="scroll" direction="left" scrollamount="5">
                                    🎉 Get 10% Off on Your First Order | Free Shipping Over ₹3000 | 24/7 Customer Support Available 🎉
                                </marquee>
                            ) : (
                                <div className="input-container">
                                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search Products" />
                                    <IoMdSearch onClick={searchNavigate} />
                                </div>
                            )
                        }

                    </div>

                    {/* Right: Icons */}

                    <div className="search-icons d-flex gap-4 align-items-center">
                        <div className="login-user">
                            {
                                inputValue ? (
                                    <IoMdSearch size={22} onClick={toggleInput} />
                                ) : (
                                    <FaRectangleXmark size={22} onClick={toggleInput} />
                                )
                            }
                        </div>
                        <div className="add-to-cart position-relative">
                            <FaCartPlus size={22} onClick={navigateCart} />
                            {
                                cartItems.length === 0
                                    ? <span className="badge">0</span>
                                    : <span className="badge">{cartItems.length}</span>
                            }

                        </div>

                        <div className="hamburger d-lg-none position-relative">
                            <IoMenu onClick={clickForNav} size={25} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default InfoBar;
