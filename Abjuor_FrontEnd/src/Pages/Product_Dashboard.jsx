import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Dashbord.scss';
import { FaStar } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import Dashborad from '../components/Section/Dashborad';
import Base_url from '../config/Base_Url';
import { IoMdMenu } from "react-icons/io";


function Product_Dashboard() {
    const navigate = useNavigate();
    const { mainCategory, category } = useParams();
    const [products, setProducts] = useState([]);
    // const [show, setshow] = useState(true)
    const [pagination, setPagination] = useState(1);
    const productsPerPage = 9;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!category) return;

        const getAllProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${Base_url}/all-products/${category}`);
                if (!response.ok) {
                    console.log("Fetching error");
                    setProducts([]);
                    setLoading(false);
                    return;
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setProducts(data);
                } else if (Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    console.error("No product data found:", data);
                    setProducts([]);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setProducts([]);
            }
            setLoading(false);
        };

        getAllProducts();
    }, [category]);

    useEffect(() => {
        console.log(products);

    }, [])

    const indexLastProduct = pagination * productsPerPage;
    const indexFirstProduct = indexLastProduct - productsPerPage;
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const navigateToProduct = (mainCategory, category, productId) => {
        navigate(`/product-category/${mainCategory}/${category}/${productId}`);
    };

    return (
        <Container className="py-4">
            <Row>
                <Col lg={3} md={12}>
                    <Dashborad />
                </Col>

                <Col lg={9}>
                    <div className="cards_main_containers">
                        <Row>
                            {loading ? (
                                <p>Loading products...</p>
                            ) : currentProducts.length === 0 ? (
                                <p>No products found for this category.</p>
                            ) : (
                                currentProducts.map((product, idx) => (
                                    <Col lg='4' md='6' sm='12' key={`${product.productName}-${idx}`} className="mb-4">
                                        <div className="card_container">
                                            <div className="card_img">
                                                <img src={product.productImg} loading="lazy" alt={product.productName} />
                                                <div className="card_details">
                                                    <h3 className='card_name'>{product.productName}</h3>
                                                    <div className="rating_cards">
                                                        {[...Array(5)].map((_, index) => (
                                                            <FaStar key={index} />
                                                        ))}
                                                    </div>
                                                    <div className="product_prices d-flex align-items-center justify-content-between">
                                                        <h4>{product.productPrice} <sup>{product.productOldPrice}</sup></h4>
                                                        <IoEyeSharp
                                                            onClick={() => navigateToProduct(mainCategory, category, product._id || product.id)}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </div>

                    {!loading && totalPages > 1 && (
                        <nav className='pagination-container'>
                            <ul className="pagination">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i} className={`page-item ${pagination === i + 1 ? 'active' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => setPagination(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Product_Dashboard;
