import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import banner1 from '../../assets/images/HomeImg/banner1.png'
import banner2 from '../../assets/images/HomeImg/banner2.png'
import banner3 from '../../assets/images/HomeImg/banner3.png'
import '../../styles/Banner.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'  
import 'swiper/css'

const banners = [
  {
    img: banner1,
    heading: 'Choose Your Product',
    title: 'Hey Everyone, How Are You',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum pariatur maiores nemo, nulla, qui iusto excepturi eligendi enim officia porro. Debitis voluptatum vel beatae dolor minima voluptates corrupti quibusdam.',
    buttonText: 'Shop Now',
  },
  {
    img: banner2,
    heading: 'Season Sale',
    title: 'Up to 50% Off',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum pariatur maiores nemo, nulla, qui iusto excepturi eligendi enim officia porro. Debitis voluptatum vel beatae dolor minima voluptates corrupti quibusdam.',
    buttonText: 'Explore Deals',
  },
  {
    img: banner3,
    heading: 'New Arrivals',
    title: 'Latest Trends for You',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum pariatur maiores nemo, nulla, qui iusto excepturi eligendi enim officia porro. Debitis voluptatum vel beatae dolor minima voluptates corrupti quibusdam.',
    buttonText: 'Check Out',
  },
]

function Banner() {
  return (
    <Container fluid className="Banner-section">
      <Container>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="banner-swiper"
        >
          {banners.map((banner, idx) => (
            <SwiperSlide key={idx}>
              <Row className="banner-slide-row" style={{ alignItems: 'center' }}>
                <Col md={6} className="banner-slide-content">
                  <h3>{banner.heading}</h3>
                  <h1>{banner.title}</h1>
                  <p>{banner.description}</p>
                  <Button>{banner.buttonText}</Button>
                </Col>
                <Col md={6} className="banner-slide-image">
                  <img src={banner.img}  alt={`banner-${idx}`} />
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  )
}

export default Banner
