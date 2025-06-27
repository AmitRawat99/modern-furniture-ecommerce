import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import '../styles/reivew.scss';
import UserContext from '../context/UserContext';
import Base_url from '../config/Base_Url';

const Review = () => {
    const { id: productId, mainCategory, category, id } = useParams();
    const { User } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [reviewStar, setReviewStar] = useState(0);
    const [formData, setFormData] = useState({ Message: '' });
    const [FetchReview, setFetchReview] = useState([])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(productId);


        if (formData.Message && reviewStar >= 0) {
            const newReview = {
                productId,
                Message: formData.Message,
                rating: reviewStar + 1,
                userName: User?.userName || "Anonymous"
            };

            try {
                const res = await fetch(`${Base_url}/add-review/${mainCategory}/${category}?productId=${productId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(newReview)
                });
                console.log(res);


                const result = await res.json();
                if (res.ok) {
                    setReviews([...reviews, newReview]);
                    setFormData({ Message: '' });
                    setReviewStar(0);
                } else {
                    console.error("Error submitting review:", result.message);
                }
            } catch (err) {
                console.error("Fetch error:", err);
            }
        }
    };

    const startClick = (idx) => {
        setReviewStar(idx);
    };

    useEffect(() => {
        const handleReview = async () => {
            try {
                const response = await fetch(`${Base_url}/get-review/${mainCategory}/${category}?productId=${productId}`);
                if (!response.ok) {
                    console.log("Data Fetching Error");
                    return;
                }
                console.log(response);


                const data = await response.json();

                if (Array.isArray(data)) {
                    setFetchReview(data);
                } else if (Array.isArray(data.reviews)) {
                    setFetchReview(data.reviews);
                } else {
                    console.error("Data format error:", data);
                }

            } catch (error) {
                console.log("Fetching Network Problem", error);
            }
        };

        handleReview();
    }, [productId]);



    return (
        <div>
            <div className="mt-4">
                <h5>User Reviews:</h5>
                {FetchReview.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <ul className="list-group">
                        {FetchReview.map((review, index) => (
                            <li key={index} className="list-group-item">
                                <div className="comment-user">
                                    <img src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" loading="lazy" alt="" />
                                    <div className="user-names">
                                        <strong>{review.userName}</strong>
                                        <div className="user-review-star d-flex mt-2 align-items-center gap-2">
                                            {Array.from({ length: review.rating }).map((_, idx) => (
                                                <p key={idx}><FaStar /></p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="our-message">
                                    <p>{review.Message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {
                User ? (
                    <Form onSubmit={handleSubmit} className="mb-3">
                        <Form.Group controlId="reviewStars" className="mb-2 mt-3 d-flex align-items-center gap-3">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div className="star-icns" key={idx} onClick={() => startClick(idx)}>
                                    <h6>{idx + 1}</h6>
                                    <FaStar className={idx <= reviewStar ? 'text-warning' : ''} />
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group controlId="reviewComment" className="textarea mb-2">
                            <Form.Label>Your Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="Message"
                                rows={3}
                                placeholder="Write your review"
                                value={formData.Message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit Review</Button>
                    </Form>
                ) : (
                    <p>Please <a href="/login">login</a> to submit a review.</p>
                )
            }
        </div>
    );
};

export default Review;
