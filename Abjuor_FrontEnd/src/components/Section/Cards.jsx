import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/cards.scss'

import cards1 from '../../assets/images/product-cards/card1.jpg'
import cards2 from '../../assets/images/product-cards/card2.jpg'
import cards3 from '../../assets/images/product-cards/card3.jpg'



const cardData = [
    {
        img: cards1,
        title: 'Modern Wooden Coffee Table',
        description: 'Crafted from premium oak wood, this stylish coffee table adds a rustic charm and functionality to your living space.',
    },
    {
        img: cards2,
        title: 'Ergonomic Office Chair',
        description: 'Designed for long working hours, this ergonomic chair features lumbar support and adjustable height for maximum comfort.',
    },
    {
        img: cards3,
        title: 'Elegant Dining Table Set',
        description: 'A 6-seater dining table made with durable hardwood and a polished finish, perfect for family meals and gatherings.',
    }
];


function Cards() {
    return (
        <Container>
            <Row className='mt-5'>
                {cardData.map((card, index) => (
                    <Col lg="4" key={index}>
                        <div className="product-img">
                            <img src={card.img} loading="lazy"  alt={card.title} />
                            <div className="product-details">
                                <h1>{card.title}</h1>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards;
