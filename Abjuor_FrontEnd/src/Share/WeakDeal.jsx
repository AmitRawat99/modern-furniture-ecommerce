import React, { useEffect, useState } from 'react'
import '../styles/Product.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Title from './Title'
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useFetcher, useNavigate } from 'react-router-dom';


import sofa1 from '../assets/images/Product_img/Home_Product/sofa-(1).jpg'
import sofa2 from '../assets/images/Product_img/Home_Product/sofa-(2).jpg'
import sofa3 from '../assets/images/Product_img/Home_Product/sofa-(3).jpg'


import office_chairs1 from '../assets/images/Product_img/Home_Product/office_chairs-(1).jpg'
import office_chairs2 from '../assets/images/Product_img/Home_Product/office_chairs-(3).jpg'
import office_chairs3 from '../assets/images/Product_img/Home_Product/office_chairs-(4).jpg'

import armchairs1 from '../assets/images/Product_img/Home_Product/ArmChiras-(1).jpg'
import armchairs2 from '../assets/images/Product_img/Home_Product/ArmChiras-(2).jpg'
import armchairs3 from '../assets/images/Product_img/Home_Product/ArmChiras-(3).jpg'


import cabinate1 from '../assets/images/Product_img/Home_Product/cabinate-(1).jpg'
import cabinate2 from '../assets/images/Product_img/Home_Product/cabinate-(2).jpg'
import cabinate3 from '../assets/images/Product_img/Home_Product/cabinate-(3).jpg'

import bash1 from '../assets/images/Product_img/Home_Product/bash-img-(1).jpg'
import bash2 from '../assets/images/Product_img/Home_Product/bash-img-(2).jpg'
import bash3 from '../assets/images/Product_img/Home_Product/bash-img-(3).jpg'

function WeakDeal() {

    const [filter, setFilter] = useState()
    const [day, setday] = useState(new Date())
    const navigateBnt = useNavigate()

    const products = [
        {
            id: 1,
            name: "Cotton Linen Sofa Corner",
            category: "Sofas",
            rating: 5,
            price: 250.0,
            image: cabinate1,
        },
        {
            id: 2,
            name: "Modern Sectional Sofa Set",
            category: "Sofas",
            rating: 4,
            price: 300.0,
            image: bash1,
        },
        {
            id: 3,
            name: "Velvet Tufted Sofa",
            category: "Sofas",
            rating: 4,
            price: 280.0,
            image: armchairs1,
        },
        {
            id: 4,
            name: "Contemporary L-Shaped Sofa",
            category: "Sofas",
            rating: 5,
            price: 320.0,
            image: cabinate2,
        },
        {
            id: 5,
            name: "Luxury Leather Recliner Sofa",
            category: "Sofas",
            rating: 5,
            price: 450.0,
            image: office_chairs3,
        },
        {
            id: 6,
            name: "Minimalist 3-Seater Sofa",
            category: "Sofas",
            rating: 3,
            price: 230.0,
            image: bash2,
        },
        {
            id: 7,
            name: "Scandinavian Style Sofa",
            category: "Sofas",
            rating: 4,
            price: 290.0,
            image: cabinate3,
        },
        {
            id: 8,
            name: "Compact Urban Sofa",
            category: "Sofas",
            rating: 4,
            price: 200.0,
            image: armchairs2,
        },
        {
            id: 9,
            name: "Ergonomic Mesh Office Chair",
            category: "Office Chair",
            rating: 4,
            price: 120.0,
            image: office_chairs2,
        },
        {
            id: 10,
            name: "Executive High-Back Chair",
            category: "Office Chair",
            rating: 5,
            price: 180.0,
            image: office_chairs1,
        },
        {
            id: 11,
            name: "Adjustable Swivel Chair",
            category: "Office Chair",
            rating: 3,
            price: 100.0,
            image: office_chairs3,
        },
        {
            id: 12,
            name: "Premium Leather Office Chair",
            category: "Office Chair",
            rating: 5,
            price: 220.0,
            image: sofa3,
        },
        {
            id: 13,
            name: "Classic Mesh Work Chair",
            category: "Office Chair",
            rating: 4,
            price: 130.0,
            image: sofa2,
        },
    ];
    



    const product_categorey = ["Dining Room", "Sofas", "Armchair"]
    const filters = () => {
        const filterProducts = Object.values(products).map((product, idx) => {
            const productName = product.category === product_categorey[idx]
            console.log(productName);
        })
    }

    const navigateProduct = () => {
        navigateBnt('product-category/office-table/director-table')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <div className="product-categories">
                        <div className="product-tabs">
                            <Title title="Trending Products!" />
                        </div>
                    </div>

                    {/* Loop over products array */}

                    <div className="cards_main_container" >
                        {products.map((product, idx) => (
                            <div className="card_container" key={idx}>
                                <div className="card_img" >
                                    <img src={product.image} loading="lazy"  alt={product.name} />
                                    <div className="card_details">
                                        <div className="product_categorey">
                                            <p>{product.category}</p>
                                        </div>
                                        <h3 className='card_name'>{product.name}</h3>
                                        <div className="rating_cards">
                                            {[...Array(product.rating)].map((_, index) => (
                                                <FaStar key={index} />
                                            ))}
                                        </div>
                                        <div className="product_price">
                                            <h4>${product.price.toFixed(2)}</h4>
                                            <IoEyeSharp onClick={() => navigateProduct()} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Row>
            </Container>
        </>
    )
}

export default WeakDeal

