import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const amount = parseFloat(query.get('amount')) || 999;

    const handlePayment = () => {
        if (!window.Razorpay) {
            console.error("Razorpay SDK not loaded.");
            return;
        }

        const options = {
            key: 'rzp_test_rXjqjNPrmPQyah',
            amount: Math.round(amount * 100),
            currency: 'INR',
            name: 'Abjur Interio',
            image: 'https://yourdomain.com/assets/images/logo/logo.png',
            description: 'Order Payment',
            handler: function (response) {
                if (response.razorpay_payment_id) {
                    alert('Payment Successful!');
                    window.location.href = '/';
                }
            },
            prefill: {
                name: 'Sandeeip Arya',
                email: 'sandeeiparya@gmail.com',
                contact: '9027548872',
            },
            theme: {
                color: '#99155e',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <div style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                maxWidth: '400px',
                width: '100%',
            }}>
                <h2 style={{
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#333'
                }}>
                    Confirm Your Payment
                </h2>
                <p style={{
                    fontSize: '18px',
                    marginBottom: '30px',
                    color: '#555'
                }}>
                    Total Amount: <strong style={{ color: '#000' }}>₹{amount.toFixed(2)}</strong>
                </p>
                <button
                    onClick={handlePayment}
                    style={{
                        width: "180px",
                        padding: '12px 30px',
                        background: '#99155e',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '500',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        margin: 'auto',
                        transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#7d104c'}
                    onMouseOut={(e) => e.target.style.background = '#99155e'}
                >
                    Proceed to Pay
                </button>
            </div>
        </div>

    );
};


export default Checkout;
