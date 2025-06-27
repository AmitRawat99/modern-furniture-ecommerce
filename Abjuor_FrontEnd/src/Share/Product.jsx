import React, { useState } from 'react'
import '../styles/Product.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Title from './Title'
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import sofa1 from '../assets/images/Product_img/Home_Product/sofa-(1).jpg'
import sofa2 from '../assets/images/Product_img/Home_Product/sofa-(2).jpg'
import sofa3 from '../assets/images/Product_img/Home_Product/sofa-(3).jpg'
import sofa4 from '../assets/images/Product_img/Home_Product/sofa-(4).jpg'
import sofa5 from '../assets/images/Product_img/Home_Product/sofa-(5).jpg'
import sofa6 from '../assets/images/Product_img/Home_Product/sofa-(6).jpg'
import sofa7 from '../assets/images/Product_img/Home_Product/sofa-(7).jpg'
import sofa8 from '../assets/images/Product_img/Home_Product/sofa-(8).jpg'

import office_chairs1 from '../assets/images/Product_img/Home_Product/office_chairs-(1).jpg'
import office_chairs2 from '../assets/images/Product_img/Home_Product/office_chairs-(2).jpg'
import office_chairs3 from '../assets/images/Product_img/Home_Product/office_chairs-(3).jpg'
import office_chairs4 from '../assets/images/Product_img/Home_Product/office_chairs-(4).jpg'
import office_chairs5 from '../assets/images/Product_img/Home_Product/office_chairs-(5).jpg'
import office_chairs6 from '../assets/images/Product_img/Home_Product/office_chairs-(6).jpg'
import office_chairs7 from '../assets/images/Product_img/Home_Product/office_chairs-(7).jpg'
import office_chairs8 from '../assets/images/Product_img/Home_Product/office_chairs-(8).jpg'

import armchairs1 from '../assets/images/Product_img/Home_Product/ArmChiras-(1).jpg'
import armchairs2 from '../assets/images/Product_img/Home_Product/ArmChiras-(2).jpg'
import armchairs3 from '../assets/images/Product_img/Home_Product/ArmChiras-(3).jpg'
import armchairs4 from '../assets/images/Product_img/Home_Product/ArmChiras-(4).jpg'
import armchairs5 from '../assets/images/Product_img/Home_Product/ArmChiras-(5).jpg'
import armchairs6 from '../assets/images/Product_img/Home_Product/ArmChiras-(6).jpg'
import armchairs7 from '../assets/images/Product_img/Home_Product/ArmChiras-(7).jpg'
import armchairs8 from '../assets/images/Product_img/Home_Product/ArmChiras-(8).jpg'


function Product() {

    const [active, setActive] = useState(null)
    const [filter, setFilter] = useState(null)
    const navigateBnt = useNavigate()

    const products = [
        {
            id: 1,
            name: "Cotton Linen Sofa Corner",
            category: "Sofas",
            rating: 5,
            price: 250.0,
            image: sofa1,
        },
        {
            id: 2,
            name: "Modern Sectional Sofa Set",
            category: "Sofas",
            rating: 4,
            price: 300.0,
            image: sofa2,
        },
        {
            id: 3,
            name: "Velvet Tufted Sofa",
            category: "Sofas",
            rating: 4,
            price: 280.0,
            image: sofa3,
        },
        {
            id: 4,
            name: "Contemporary L-Shaped Sofa",
            category: "Sofas",
            rating: 5,
            price: 320.0,
            image: sofa4,
        },
        {
            id: 5,
            name: "Luxury Leather Recliner Sofa",
            category: "Sofas",
            rating: 5,
            price: 450.0,
            image: sofa5,
        },
        {
            id: 6,
            name: "Minimalist 3-Seater Sofa",
            category: "Sofas",
            rating: 3,
            price: 230.0,
            image: sofa6,
        },
        {
            id: 7,
            name: "Scandinavian Style Sofa",
            category: "Sofas",
            rating: 4,
            price: 290.0,
            image: sofa7,
        },
        {
            id: 8,
            name: "Compact Urban Sofa",
            category: "Sofas",
            rating: 4,
            price: 200.0,
            image: sofa8,
        },
        {
            id: 9,
            name: "Ergonomic Mesh Office Chair",
            category: "Office Chair",
            rating: 4,
            price: 120.0,
            image: office_chairs1,
        },
        {
            id: 10,
            name: "Executive High-Back Chair",
            category: "Office Chair",
            rating: 5,
            price: 180.0,
            image: office_chairs2,
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
            image: office_chairs4,
        },
        {
            id: 13,
            name: "Classic Mesh Work Chair",
            category: "Office Chair",
            rating: 4,
            price: 130.0,
            image: office_chairs5,
        },
        {
            id: 14,
            name: "Contemporary Task Chair",
            category: "Office Chair",
            rating: 3,
            price: 90.0,
            image: office_chairs6,
        },
        {
            id: 15,
            name: "Adjustable Comfort Office Chair",
            category: "Office Chair",
            rating: 4,
            price: 140.0,
            image: office_chairs7,
        },
        {
            id: 16,
            name: "Deluxe Ergonomic Chair",
            category: "Office Chair",
            rating: 5,
            price: 210.0,
            image: office_chairs8,
        },
        {
            id: 17,
            name: "Classic Wooden Armchair",
            category: "Armchair",
            rating: 3,
            price: 160.0,
            image: armchairs1,
        },
        {
            id: 18,
            name: "Velvet Modern Armchair",
            category: "Armchair",
            rating: 4,
            price: 170.0,
            image: armchairs2,
        },
        {
            id: 19,
            name: "Neutral Fabric Armchair",
            category: "Armchair",
            rating: 4,
            price: 150.0,
            image: armchairs3,
        },
        {
            id: 20,
            name: "Lounge Style Armchair",
            category: "Armchair",
            rating: 5,
            price: 180.0,
            image: armchairs4,
        },
        {
            id: 21,
            name: "Patterned Comfy Armchair",
            category: "Armchair",
            rating: 3,
            price: 140.0,
            image: armchairs5,
        },
        {
            id: 22,
            name: "Minimalist Grey Armchair",
            category: "Armchair",
            rating: 4,
            price: 160.0,
            image: armchairs6,
        },
        {
            id: 23,
            name: "Luxury Lounge Armchair",
            category: "Armchair",
            rating: 5,
            price: 190.0,
            image: armchairs7,
        },
        {
            id: 24,
            name: "Classic Cozy Armchair",
            category: "Armchair",
            rating: 4,
            price: 170.0,
            image: armchairs8,
        },
    ];


    const navigateProduct = () => {
        navigateBnt('product-category/office-table/director-table')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const product_categorey = ["All", "Office Chair", "Sofas", "Armchair"]


    const filters = (selectCategory) => {
        if (selectCategory === 'All') {
            setFilter(null)
        }
        else {
            const filterProducts = Object.values(products).filter((product) =>
                product.category.toLowerCase().trim() === selectCategory.toLowerCase().trim()
            )
            setFilter(filterProducts)
            console.log(filter);
        }
    }



    return (
        <>
            <Container>
                <Row>
                    <div className="product-categories">
                        <div className="product-tabs">
                            <Title title="Feature Products" />
                            <ul className="product-tabs-name">
                                {product_categorey.map((item, idx) => (
                                    <li onClick={() => { setActive(idx); filters(item) }} className={`${active === idx ? "active" : ""}`} key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* Loop over products array */}


                    <div className="cards_main_container" >
                        {(filter || products).map((product, idx) => (
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

export default Product