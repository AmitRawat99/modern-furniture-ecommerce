import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTruck } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";


import '../../styles/Services.scss'; // You can add custom styling

const services = [
    {
        icon: <FaTruck size={32} />,
        title: 'Free Shipping All Over India',
        subtitle: 'On all orders over ₹3000',
        bgColor: 'bg-dark-1'
    },
    {
        icon: <FaPercent size={32} />,
        title: 'Instant Discounts',
        subtitle: 'Use your coupon now',
        bgColor: 'bg-dark-2'
    },
    {
        icon: <IoShieldCheckmark size={32} />,
        title: 'Secure Checkout',
        subtitle: 'Protected with 256-Bit SSL',
        bgColor: 'bg-dark-3'
    },
    {
        icon: <FaHeadset size={32} />,
        title: 'Live Support',
        subtitle: '24/7 Customer Support',
        bgColor: 'bg-dark-4'
    },
];

const Service_Cards = () => {
    return (
        <Container className="services-section py-5">
            <Row className="g-4">
                {services.map((service, idx) => (
                    <Col key={idx} md={6} lg={3}>
                        <Card className={`service-card text-center h-100 p-3 ${service.bgColor} `}>
                            <div className="icon mb-3">{service.icon}</div>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text className="text-muted">{service.subtitle}</Card.Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Service_Cards;

