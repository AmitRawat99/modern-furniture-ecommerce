import React, { useState } from 'react';
import '../../styles/Header.scss';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import InfoBar from './InfoBar';

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);

    const clickForNav = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <InfoBar clickForNav={clickForNav} showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
            <NavBar showNavbar={showNavbar} setShowNavbar={setShowNavbar} clickForNav={clickForNav} />
        </>
    );
}

export default Header;
