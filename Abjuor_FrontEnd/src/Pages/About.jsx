import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import aboutImage from '../assets/images/Banner/About_banner.webp'
import '../styles/About.scss'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Service_Cards from '../components/Section/Service_Cards';
import Accordions from '../components/Accordion/Accordion';



function About() {
  return (
    <>
      <Container fluid className='about-banner'>
        <Container>
          <div className="about-container-content">
            <h2>About Us</h2>
            <p><Link to={'/'}>Home</Link> / About</p>
          </div>

        </Container>
      </Container >

      <Container>

        <Service_Cards />

        <Row>

          <div className="about-container-box">
            <div className="about-container-content1">
              <div className="about-container-imgs">
                <div className="next-img1">
                  <img src={aboutImage} loading="lazy"  alt="" />
                </div>
                <div className="next-img2">
                  <img src={aboutImage} loading="lazy"   alt="" />
                </div>
                <div className="next-img3">
                  <h2>30+ Years Exprinaces</h2>
                </div>
              </div>
              <div className="about-container-details">
                <div className="about-details-suplly">
                  <h4>Get To Know</h4>
                  <h1>Fast, Secure, and Hassle-Free Delivery Designed to Keep Up with Your Busy Lifestyle</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sapiente laboriosam quaerat aspernatur dolores alias amet soluta ab velit, laudantium iste vitae eum deserunt inventore, assumenda laborum neque autem earum?</p>
                </div>
                <div className="about-details-points">
                  <ul className='about-points mt-3'>
                    <li className='d-flex align-items-center gap-2'> <FaCheck /> Guaranteed delivery within 24 hours to keep you ahead of schedule.</li>
                    <li className='d-flex align-items-center gap-2' > <FaCheck /> Real-time tracking so you know exactly when your order arrives.</li>
                    <li className='d-flex align-items-center gap-2' > <FaCheck /> Carefully packaged to ensure your items arrive safe and intact.</li>
                  </ul>
                  <div className="explore-now mt-5">
                    <button>Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Row>
      </Container>

      <Accordions />

    </>

  );
}

export default About;
