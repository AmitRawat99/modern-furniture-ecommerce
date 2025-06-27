import React, { useState } from "react";
import "../styles/Order.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Base_Url from "../config/Base_Url";

const Order = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [step, setStep] = useState("form");
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const { productName, productAmount, productId, productQty } = location.state || {};
    const userId = localStorage.getItem("userId")
    console.log(userId);


    const [formData, setFormData] = useState({
        userId,
        productId,
        productQty,
        productAmount,
        productName,
        fullName: "",
        email  :"",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        paymentMethod: "",
        landmark: "",
        alternatePhone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Shipping Info:", formData);

        try {
            const response = await fetch(`${Base_Url}/order-proudct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();
            console.log(responseData);

            console.log("FormData being sent:", formData);

            if (responseData.success) {
                if (paymentMethod === "online") {
                    navigate(`/payment?amount=${productAmount}`);
                } else {
                    navigate("/profile");
                }
            } else {
                alert("Failed to place order: " + responseData.message);
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Something went wrong. Please try again.");
        }

        setStep("payment");
    };

    return (
        <div className="order-container">
            {step === "form" && (
                <>
                    <h2 className="order-title">Shipping Information</h2>
                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group full-width">
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Alternate Phone</label>
                                <input type="text" name="alternatePhone" value={formData.alternatePhone} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Landmark</label>
                                <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label>Postal Code / PIN</label>
                                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Choose Payment Method:</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="online"
                                        checked={paymentMethod === "online"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    Online Payment
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="cod"
                                        name="paymentMethod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            {paymentMethod === "cod" ? "Order Now" : "Proceed to Payment"}
                        </button>
                    </form>
                </>
            )}

            {step === "payment" && (
                <div className="payment-section">
                    <h2>Payment</h2>
                    <p>Redirecting to payment gateway...</p>
                </div>
            )}
        </div>
    );
};

export default Order;
