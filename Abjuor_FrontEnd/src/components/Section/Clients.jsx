import React from 'react'
import '../../styles/Clients.scss'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Title from '../../Share/Title'
import 'swiper/css'
import { FaStar } from "react-icons/fa";


const clientTestimonials = [
    {
        name: "Ritika Sharma",
        review: "The service was beyond expectations. Timely delivery and top-quality furniture. Highly recommended!",
        image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
        name: "Amit Verma",
        review: "Their support team was so helpful. The sofa I bought was elegant and very comfortable.",
        image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
        name: "Sunita Mehra",
        review: "Great experience! Stylish designs, affordable prices, and fast service. Definitely buying again!",
        image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
        name: "Sunita Mehra",
        review: "Great experience! Stylish designs, affordable prices, and fast service. Definitely buying again!",
        image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
        name: "Sunita Mehra",
        review: "Great experience! Stylish designs, affordable prices, and fast service. Definitely buying again!",
        image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
]

function Clients() {
    return (
        <Container className='client-review-section'>
            <div className='client-say'>
                <Title title={"Client's Review"} />
            </div>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
            >
                {clientTestimonials.map((client, index) => (
                    <SwiperSlide key={index} className='testimonial-card'>
                        <div className='testimonial-content'>
                            <img src={client.image}   alt={client.name} loading="lazy" className='client-img' />
                            <div className="review_star">
                                {
                                    ([...Array(5)].map((_, idx) => {
                                        return (
                                            <FaStar />
                                        )
                                    }))
                                }
                            </div>
                            <p className='client-review'>"{client.review}"</p>
                            <h5 className='client-name'>- {client.name}</h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Clients
