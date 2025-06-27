import React from 'react'
import '../styles/Contact.scss'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead, MdOutlineTimer } from "react-icons/md";
import ShowProduct from '../assets/images/contact/contact-banner.png'

function Contact() {
  return (
    <>
      <Container fluid className='about-banner'>
        <Container>
          <div className="about-container-content">
            <h2>Contact Us</h2>
            <p><Link to={'/'}>Home</Link> / Contact</p>
          </div>
        </Container>
      </Container>

      <Container className="my-5">
        <div className="contact-container">
          <h1 className="mb-4">Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis tempora vitae neque. Rem repellat quasi quibusdam accusamus nostrum tempore. Provident voluptates quae consequatur minus excepturi fuga dolor necessitatibus ratione eaque!</p>
        </div>

        <Row className="mt-4 g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 text-center contact-card">
              <Card.Body>
                <IoLocation className="contact-icon" />
                <Card.Title>Address</Card.Title>
                <Card.Text>1234 E-commerce St,<br />Shop City, SC 56789</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center contact-card">
              <Card.Body>
                <FaPhone className="contact-icon" />
                <Card.Title>Phone</Card.Title>
                <Card.Text>+1 (555) 123-4567<br />+1 (555) 987-6543</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center contact-card">
              <Card.Body>
                <MdMarkEmailRead className="contact-icon" />
                <Card.Title>Email</Card.Title>
                <Card.Text>support@ecommerce.com<br />help@ecommerce.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center contact-card">
              <Card.Body>
                <MdOutlineTimer className="contact-icon" />
                <Card.Title>Working Hours</Card.Title>
                <Card.Text>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Form with Image */}
        
        <Row className="my-5 align-items-center contact-form-section">
          <Col md={6}>
            <Form className='contact-form'>
              <h3 className="mb-4">Get In Touch</h3>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="number" placeholder="Your Number" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Subject" />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control id='text-area' as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>

              <Button variant="primary" type="submit">Send Message</Button>
            </Form>

          </Col>

          <Col md={6}>
            <div className="girl-image-wrapper">
              <img  src={ShowProduct} alt="Support Girl" loading="lazy" className="girl-image" />
            </div>
          </Col>
        </Row>

        
        <div className="map-container my-5">
          <iframe
            title="E-commerce Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017753488136!2d-122.4194154846772!3d37.774929279759095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f9d6b77%3A0x29d028fcd854b661!2sShop%20City!5e0!3m2!1sen!2sin!4v1629381234567"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </Container>
    </>
  )
}

export default Contact
