import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Share/Title'
import '../../styles/Brands.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import Brands1 from '../../assets/images/Brands/brands (1).jpg'
import Brands2 from '../../assets/images/Brands/brands (2).jpg'
import Brands3 from '../../assets/images/Brands/brands (3).jpg'
import Brands4 from '../../assets/images/Brands/brands (4).jpg'
import Brands5 from '../../assets/images/Brands/brands (5).jpg'
import Brands6 from '../../assets/images/Brands/brands (6).jpg'
import Brands7 from '../../assets/images/Brands/brands (7).jpg'
import Brands8 from '../../assets/images/Brands/brands (8).jpg'
import Brands9 from '../../assets/images/Brands/brands (9).jpg'
import { Autoplay } from 'swiper/modules'

function Brands() {

    const BrandedLogo = [Brands1, Brands2, Brands3, Brands4, Brands5, Brands6, Brands7, Brands8, Brands9]

    return (
        <>
            <Container>
                <Row>
                    <div className="category-title">
                    <Title title={"Our Brands"} />
                    </div>
                    <div className="branded-product-logo">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2000 }}
                            loop={true}
                            grabCursor={true}
                            spaceBetween={40}
                            breakpoints={{
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                        >
                            {BrandedLogo.map((logo, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={logo} loading="lazy"  alt={`brand-${idx + 1}`}  />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Brands