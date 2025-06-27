import React, { useEffect, useState } from 'react'
import '../../styles/Sales_Banner.scss'
import saleBanner from '../../assets/images/Banner/Sales_banner.png'
import saleProduct from '../../assets/images/Banner/sale_product1.png'
import { Row, Col, Container } from 'react-bootstrap'

function Sales_Banner() {

    const [activeTime, setActiveTime] = useState(new Date())

    useEffect(() => {
        const intervel = setInterval(() => {
            const now = new Date()
            setActiveTime(now)
            setTimeout(intervel)
        }, 1000);
    })

    return (
        <section className="sales-banner-wrapper" style={{ backgroundImage: `url(${saleBanner})` }}>
            <Container className='sales-banner-content'>
                <Row className="align-items-center">
                    <Col md={12} lg={6}>
                        <div className="product-details">
                            <h1>Premium Product's</h1>
                            <p><b>Offer Limit  :</b> <span>{activeTime.getHours()}</span>  : {activeTime.getMinutes()} : {activeTime.getSeconds()} </p>
                            <p> Experience unmatched comfort and elegance with our hand-crafted sofas made from the finest materials. Perfect for modern living spaces, our sofa collections blend style, durability, and cozy luxury to elevate your home ambiance.</p>
                            <button>Shoping Now</button>

                        </div>
                    </Col>
                    <Col lg={6} className="text-center">
                        <div className="product-sale-img">
                            <img  src={saleProduct} loading="lazy"  alt="sale product" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sales_Banner
