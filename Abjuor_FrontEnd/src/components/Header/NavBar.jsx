import React, { useEffect, useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/Header.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Base_url from '../../config/Base_Url'
import { FaCartPlus, FaUserCheck } from 'react-icons/fa';
import UserContext from '../../context/UserContext';
import Base_Url from '../../config/Base_Url';



import logo from '../../assets/images/logo/logo.png';

function NavBar({ showNavbar, clickForNav, setShowNavbar }) {
    
    const [isMenu, setMenu] = useState(false)
    const navigateLogin = useNavigate()

    const toggleMenu = (menuName) => {
        setMenu(prev => (prev === menuName ? null : menuName));
    };

    const { User, removeUser } = useContext(UserContext)


    const handleLogout = async () => {
        try {
            const res = await fetch(`${Base_Url}/logout`, {
                method: 'GET',
                credentials: 'include',
            });

            if (res.ok) {
                alert('Logged out successfully');
                removeUser()
                navigateLogin('/login')
            } else {
                const data = await res.json();
                console.error('Logout failed:', data.message);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    return (
        <>
            <Container fluid id='container-fluid'>

                <Container>
                    <div className="custom-navbar d-flex align-items-center">
                        <Container className="d-flex align-items-center justify-content-between">

                            {/* for desktop this navbar */}

                            <div className="d-flex align-items-center">
                                <div className="desktop-menu d-none d-lg-flex justify-content-center">
                                    <div className="nav-item">
                                        <li><Link to={'/'}>Home</Link></li>
                                    </div>
                                    <div className="nav-item">
                                        <li><Link to={'/about'}>About</Link></li>
                                    </div>
                                    <div className="nav-item d-flex align-items-center gap-2 position-relative">
                                        Office Furniture <IoIosArrowDown />
                                        <ul className="submenu">
                                            <li><Link to={'/product-category/office furniture/office-chairs'}>Office Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/gaming-chairs'}>Gaming Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/chairman-chairs'}>Chairman Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/executive-chairs'}>Executive Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/recliner-chairs'}>Recliner Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/workStation-chairs'}>WorkStation Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/visitor-chairs'}>Visitor Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/study-chairs'}>Study Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/living-room-chairs'}>Living Room Chairs</Link></li>
                                            <li><Link to={'/product-category/office furniture/office-sofa'}>Office Sofa</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-item d-flex align-items-center gap-2 position-relative">
                                        Office Table <IoIosArrowDown />
                                        <ul className="submenu">
                                            <li><Link to={'/product-category/office-table/director-table'}>Director Table</Link></li>
                                            <li><Link to={'/product-category/office-table/executive-table'}>Executive Table</Link></li>
                                            <li><Link to={'/product-category/office-table/computer-table'}>Computer Table</Link></li>
                                            <li><Link to={'/product-category/office-table/study-table'}>Study Table</Link></li>
                                            <li><Link to={'/product-category/office-table/conference-table'}>Conference Table</Link></li>
                                            <li><Link to={'/product-category/office-table/reception-table'}>Reception Table</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-item d-flex align-items-center gap-2 position-relative">
                                        Workstations <IoIosArrowDown />
                                        <ul className="submenu">
                                            <li><Link to={'/product-category/work-station/Rectangular'}>Rectangular</Link></li>
                                            <li><Link to={'/product-category/work-station/cubicle-cluster'}>Cubicle Cluster</Link></li>
                                            <li><Link to={'/product-category/work-station/dual-cluster'}>Dual Cluster</Link></li>
                                            <li><Link to={'/product-category/work-station/single-seater'}>Single Seater</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-item d-flex align-items-center gap-2 position-relative">
                                        Institutional <IoIosArrowDown />
                                        <ul className="submenu">
                                            <li><Link to={'/product-category/institutional/kids-chair'}>Kids Chair</Link></li>
                                            <li><Link to={'/product-category/institutional/kids-table'}>Kids Table</Link></li>
                                            <li><Link to={'/product-category/institutional/kids-study-table-chair'}>Kids Study Table & Chair</Link></li>
                                            <li><Link to={'/product-category/institutional/study-desk'}>Study Desk</Link></li>
                                            <li><Link to={'/product-category/institutional/training-chair'}>Training Chair</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-item d-flex align-items-center gap-2 position-relative">
                                        Other Products <IoIosArrowDown />
                                        <ul className="submenu">
                                            <li><Link to={'/product-category/other-products/cabinet-storage'}>Cabinet Storage</Link></li>
                                            <li><Link to={'/product-category/other-products/coffee-center-tables'}>Coffee/Center Tables</Link></li>
                                            <li><Link to={'/product-category/other-products/bar-chairs-stools'}>Bar Chairs / Stools</Link></li>
                                            <li><Link to={'/product-category/other-products/cafe-restaurant-furniture'}>Cafe/Restaurant Furniture</Link></li>
                                            <li><Link to={'/product-category/other-products/chair-accessories'}>Chair Accessories</Link></li>
                                        </ul>
                                    </div>
                                    <div className="nav-item">
                                        <li><Link to={'/contact'}>Contact Us</Link></li>
                                    </div>
                                </div>
                            </div>

                            {/* log system */}

                            <div className="login-system d-none d-lg-flex align-items-center gap-3">
                                {User ? (
                                    <div className="user-dropdown position-relative">
                                        <p className="user-name d-flex gap-2 align-items-center">
                                            <FaUserCheck /> {User.userName}
                                        </p>
                                        <ul className="user-submenu">
                                            <li onClick={handleLogout}><Link to={'logout'}>Logout</Link></li>
                                            <li> <Link to={'/profile'}>Profile</Link></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <>
                                        <li><Link to="/login">Log in</Link></li>
                                        <li><Link to="/signup">Sign Up</Link></li>
                                    </>
                                )}
                            </div>


                        </Container>

                    </div>
                </Container>


                {/* for  Mobile Menu */}

                <Container>

                    <div className={`mobile-menu ${showNavbar ? 'open' : ''}`}>
                        <div className="mobile-menu-header">
                            <span className="close-btn" onClick={clickForNav}>&times;</span>
                        </div>
                        <div className="mobile-nav-links">
                            <div className="nav-item mobile-item">
                                <li><Link to={'/'}>Home</Link></li>
                            </div>
                            <div className="nav-item mobile-item">
                                <li><Link to={'/about'}>About</Link></li>
                            </div>
                            <div className="nav-item  gap-2 position-relative">
                                <div className="tabs d-flex align-items-center" onClick={() => toggleMenu("Office Furniture")}>
                                    Office Furniture <IoIosArrowDown />
                                </div>
                                <ul className={`mobile-submenu ${isMenu == "Office Furniture" ? "show" : ""}`}>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/office-chairs'}><GoDotFill size={12} />Office Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/gaming-chairs'}><GoDotFill size={12} />Gaming Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/chairman-chairs'}><GoDotFill size={12} />Chairman Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/executive-chairs'}><GoDotFill size={12} />Executive Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/recliner-chairs'}><GoDotFill size={12} />Recliner Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/workStation-chairs'}><GoDotFill size={12} />WorkStation Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/visitor-chairs'}><GoDotFill size={12} />Visitor Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/study-chairs'}><GoDotFill size={12} />Study Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/living-room-chairs'}><GoDotFill size={12} />Living Room Chairs</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office furniture/office-sofa'}><GoDotFill size={12} />Office Sofa</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item  gap-2 position-relative">
                                <div className="tabs d-flex align-items-center" onClick={() => toggleMenu("Office Table")}>
                                    Office Table <IoIosArrowDown />
                                </div>
                                <ul className={`mobile-submenu ${isMenu == "Office Table" ? "show" : ""}`}>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/director-table'}><GoDotFill size={12} />Director Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/executive-table'}><GoDotFill size={12} />Executive Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/computer-table'}><GoDotFill size={12} />Computer Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/study-table'}><GoDotFill size={12} />Study Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/conference-table'}><GoDotFill size={12} />Conference Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/office-table/reception-table'}><GoDotFill size={12} />Reception Table</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item  gap-2 position-relative">
                                <div className="tabs d-flex align-items-center" onClick={() => toggleMenu("Workstations")}>
                                    Workstations <IoIosArrowDown />
                                </div>
                                <ul className={`mobile-submenu ${isMenu == "Workstations" ? "show" : ""}`}>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/work-station/Rectangular'}><GoDotFill size={12} />Rectangular</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/work-station/cubicle-cluster'}><GoDotFill size={12} />Cubicle Cluster</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/work-station/dual-cluster'}><GoDotFill size={12} />Dual Cluster</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/work-station/single-seater'}><GoDotFill size={12} />Single Seater</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item  gap-2 position-relative">
                                <div className="tabs d-flex align-items-center" onClick={() => toggleMenu("Institutional")}>
                                    Institutional <IoIosArrowDown />
                                </div>
                                <ul className={`mobile-submenu ${isMenu == "Institutional" ? "show" : ""}`}>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/institutional/kids-chair'}><GoDotFill size={12} />Kids Chair</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/institutional/kids-table'}><GoDotFill size={12} />Kids Table</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/institutional/kids-study-table-chair'}><GoDotFill size={12} />Kids Study Table & Chair</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/institutional/study-desk'}><GoDotFill size={12} />Study Desk</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/institutional/training-chair'}><GoDotFill size={12} />Training Chair</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item gap-2 position-relative">
                                <div className="tabs d-flex align-items-center" onClick={() => toggleMenu("Other Products")}>
                                    Other Products <IoIosArrowDown />
                                </div>
                                <ul className={`mobile-submenu ${isMenu == "Other Products" ? "show" : ""}`}>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/other-products/cabinet-storage'}><GoDotFill size={12} />Cabinet Storage</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/other-products/coffee-center-tables'}><GoDotFill size={12} />Coffee/Center Tables</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/other-products/bar-chairs-stools'}><GoDotFill size={12} />Bar Chairs / Stools</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/other-products/cafe-restaurant-furniture'}><GoDotFill size={12} />Cafe/Restaurant Furniture</Link></li>
                                    <li><Link className='d-flex gap-2 align-items-center' to={'/product-category/other-products/chair-accessories'}><GoDotFill size={12} />Chair Accessories</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item mobile-item">
                                <li><Link to={'/contact'}>Contact Us</Link></li>
                            </div>
                        </div>
                    </div>

                </Container>


            </Container >
        </>
    );
}

export default NavBar;
