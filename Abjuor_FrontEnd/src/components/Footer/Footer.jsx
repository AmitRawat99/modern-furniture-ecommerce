import React, { useEffect, useState } from 'react';
import '../../styles/Footer.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowUp } from "react-icons/fa";

function Footer() {

  const [scrollActive, setScroll] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setScroll(true)
      }
      else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // clean 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>

      <footer className="footer">

        <Container>
          <Row className="footer-content">

            {/* Contact Section */}

            <Col md={3} sm={12} className="footer-section">
              <h2>Contact</h2>
              <address>
                <b>Address:</b> M-4, Mahaveer House, Karampura commercial complex, New Delhi - 110015
              , Delhi, India
              </address>
            </Col>

            {/* Company Information Section */}

            <Col md={2} sm={12} className="footer-section">
              <h2>Our Company</h2>
              <ul className="company-tabs">
                <li><a href="/">About Us</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Become an Affiliate</a></li>
                <li><a href="/">Enquire for Dealership</a></li>
              </ul>
            </Col>

            {/* Recent Posts Section */}

            <Col md={4} sm={12} className="footer-section">
              <h2>Recent Posts</h2>
              <ul className="company-tabs">
                <li><a href="/">Executive & Ergonomic Office Chair| 2025</a></li>
                <li><a href="/">Office Chair at Affordable Price in Bangalore – VJ Interior</a></li>
                <li><a href="/">Comfortable Office Chairs Online at the Best Prices</a></li>
                <li><a href="/">How To Select A Chair For Study- Tips & Advice</a></li>
              </ul>
            </Col>

            {/* Newsletter Section */}

            <Col md={3} sm={12} className="footer-section">
              <h2>Subscribe to Our Newsletter</h2>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Button variant="primary" type="submit" className="subscribe-button">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <div className="footer-bottom">
          <Container>
            <Row>
              <Col className="text-center">
                <p>&copy; {new Date().getFullYear()} Abjur Interio. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="scrolls-container">
          {
            scrollActive && (
              <p onClick={scrollTop}><FaArrowUp /></p>
            )
          }
        </div>
      </footer>
    </>

  )
}

export default Footer;
