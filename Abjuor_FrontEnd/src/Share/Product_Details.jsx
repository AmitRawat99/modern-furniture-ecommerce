import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import '../styles/Product_Details.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Review from './Reviews';
import Base_url from '../config/Base_Url';
import Order from './Order';

function Product_Details() {
    const navigateUrl = useNavigate();
    const { mainCategory, category, id } = useParams();
    const [productData, setProductData] = useState(null);
    const [showMainImg, setShowImg] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchProductDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${Base_url}/all-products/${category}/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.success && data.ProductId) {
                    setProductData(data.ProductId);
                } else {
                    console.error("No product found.");
                    setProductData(null);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setProductData(null);
            } finally {
                setLoading(false);
            }
        };

        if (category && id) {
            fetchProductDetails();
        }
    }, [category, id]);

    useEffect(() => {
        if (productData) {
            setShowImg(productData.productImg);
        }
    }, [productData]);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const addToCart = () => {
        if (!productData) return;

        const existingCart = JSON.parse(localStorage.getItem("cartItem")) || [];

        const productDetails = {
            productId: productData.id,
            productImg: productData.productImg,
            productName: productData.productName,
            productPrice: productData.productPrice,
            productQty: quantity,
        };

        const existingIndex = existingCart.findIndex(
            (item) => item.productId === productDetails.productId
        );

        if (existingIndex !== -1) {
            existingCart[existingIndex].productQty += quantity;
        } else {
            existingCart.push(productDetails);
        }

        localStorage.setItem("cartItem", JSON.stringify(existingCart));
        alert("Product added to cart!");
    };

    const goPayment = () => {
        navigateUrl("/order", {
            state: {
                productName: productData.productName,
                productAmount: productData.productPrice,
                productId: productData.id,
                productQty: quantity,
            },
        });
    };

    const changeImg = (img) => {
        setShowImg(img);
    };

    return (
        <Container>
            {loading ? (
                <div>Loading...</div>
            ) : !productData ? (
                <div>No product found for this ID.</div>
            ) : (
                <>
                    <Row className="product-details-container">
                        <Col md={6}>
                            <div className="product-container-img">
                                <div className="product-main-img">
                                    <img src={showMainImg} loading="lazy" alt={productData.productName} />
                                </div>
                                <div className="bottom-img">
                                    {productData.subImg1 && (
                                        <img
                                            onClick={() => changeImg(productData.subImg1)}
                                            src={productData.subImg1}
                                            loading="lazy"
                                            alt={productData.productName}
                                        />
                                    )}
                                    {productData.subImg2 && (
                                        <img
                                            onClick={() => changeImg(productData.subImg2)}
                                            src={productData.subImg2}
                                            loading="lazy"
                                            alt={productData.productName}
                                        />
                                    )}
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="product-details">
                                <div className="product-title">
                                    <h2>{productData.productName}</h2>
                                    <h4>
                                        ₹{productData.productPrice}
                                        {productData.productOldPrice && (
                                            <sup> ₹{productData.productOldPrice}</sup>
                                        )}
                                    </h4>
                                </div>

                                <div className="add-to-card-btn">
                                    <div className="product-qty-box">
                                        <p className="qty-symbol" onClick={decrement}>
                                            −
                                        </p>
                                        <span className="qty-count">{quantity}</span>
                                        <p className="qty-symbol" onClick={increment}>
                                            +
                                        </p>
                                    </div>

                                    <div className="product-btn d-flex gap-3">
                                        <button onClick={addToCart}>+ Add To Cart</button>
                                        <button onClick={goPayment}>Order Now</button>
                                    </div>
                                </div>

                                <div className="product-points mt-4">
                                    <h5>What You Get With This Product:</h5>
                                    <ul className="product-benefit">
                                        {productData.keyFeature &&
                                            JSON.parse(productData.keyFeature).map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <Tabs defaultActiveKey="description" id="product-tabs" className="mb-3 mt-3">
                                <Tab eventKey="description" title="Description">
                                    <p>{productData.description}</p>
                                </Tab>
                                <Tab eventKey="reviews" title="Reviews">
                                    <Review />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Product_Details;
