import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Base_Url from '../config/Base_Url';
import '../styles/Dashbord.scss';

function Shop() {
    const { mainCategory, category, id } = useParams()
    const location = useLocation();
    const navigate = useNavigate();
    const productLengths = 12;
    const [pagination, setPagination] = useState(1)
    const [loading, setLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchTerm = queryParams.get('search-items')?.toLowerCase() || '';

        const fetchAndFilterProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${Base_Url}/all-products`);
                const data = await response.json();
                const allProducts = Array.isArray(data.product) ? data.product : [];

                const filtered = allProducts.filter(product =>
                    product.productName.toLowerCase().includes(searchTerm)
                );
                setSearchResults(filtered);
            } catch (error) {
                console.error("Fetch error:", error);
                setSearchResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAndFilterProducts();
    }, [location.search]);


    const navigateToProduct = (mainCategory, category, id) => {
        navigate(`/product-category/${mainCategory}/${category}/${id}`);
    };

    const lastProduct = pagination * productLengths;
    const firstProduct = lastProduct - productLengths;
    const currentProduct = searchResults.slice(firstProduct, lastProduct)
    const totalPages = Math.ceil(searchResults.length / productLengths);
    console.log(totalPages);

    console.log("currentProduct", currentProduct);



    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="cards_main_containers mt-5">
                        <Row>
                            {loading ? (
                                <p>Loading products...</p>
                            ) : currentProduct.length === 0 ? (
                                <p>No products found for "{category}".</p>
                            ) : (
                                currentProduct.map((product, idx) => (
                                    <Col lg="3" md="4" sm="6" key={idx} className="mb-4">
                                        <div className="card_container">
                                            <div className="card_img">
                                                <img
                                                    src={product.productImg}
                                                    alt={product.productName}
                                                    loading="lazy"
                                                />
                                                <div className="card_details">
                                                    <h3 className="card_name">{product.productName}</h3>
                                                    <div className="rating_cards">
                                                        {[...Array(5)].map((_, index) => (
                                                            <FaStar key={index} />
                                                        ))}
                                                    </div>
                                                    <div className="product_prices d-flex align-items-center justify-content-between">
                                                        <h4>
                                                            ₹{product.ProductPrice}
                                                            <sup
                                                                style={{
                                                                    textDecoration: 'line-through',
                                                                    fontSize: '12px',
                                                                    marginLeft: '4px',
                                                                }}
                                                            >
                                                                ₹{product.ProductOldPrice}
                                                            </sup>
                                                        </h4>
                                                        <IoEyeSharp
                                                            onClick={() =>
                                                                navigateToProduct(
                                                                    product.mainCategory,
                                                                    product.category,
                                                                    product._id || product.id
                                                                )
                                                            }
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

                    {
                        !loading && totalPages > 1 && (
                            <div className="pagination-section">
                                <div className="pagination-btns">
                                    {
                                        Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`page-item ${pagination == i + 1 ? "active" : ""}`} onClick={() => setPagination(i + 1)}>{i + 1}</li>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </Col>

            </Row>
        </Container>
    );
}

export default Shop;
