import React from 'react';
import '../../styles/About.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Title from '../../Share/Title';
import { Container } from 'react-bootstrap';

function Accordion() {


    const accordionData = [
        {
            accordionTitle: "Fast & Reliable Delivery",
            accordionDescription: "At our core, we believe timely delivery is key to a satisfying shopping experience. That’s why we’ve partnered with trusted logistics providers to ensure your orders reach you on time—every time. Enjoy same-day and next-day delivery in most locations with real-time tracking updates. From the moment you place your order to the second it arrives at your doorstep, you stay informed via SMS and email. No more waiting or wondering—just fast, transparent, and reliable service designed around your schedule."
        },
        {
            accordionTitle: "Quality Assurance & Easy Returns",
            accordionDescription: "We understand how important it is to trust the quality of the products you buy online. That’s why every item undergoes a thorough quality check before dispatch. And if something’s not quite right? No worries. Our hassle-free 7-day return policy means you can return your purchase easily, with no questions asked. We value your satisfaction and work tirelessly to ensure your expectations are met—or exceeded. Shop with confidence, knowing that your happiness is our top priority."
        },
        {
            accordionTitle: "Secure Payments & Exclusive Offers",
            accordionDescription: "Your security is our responsibility. We use cutting-edge encryption and fraud protection to ensure all your transactions are 100% safe. Choose from a wide range of payment methods, including UPI, debit/credit cards, net banking, and even cash on delivery. To make your experience even better, our members enjoy access to exclusive discounts, early-bird sales, and seasonal promotions you won’t find anywhere else. Save more, shop smart, and feel secure every step of the way."
        },
        {
            accordionTitle: "24/7 Customer Support",
            accordionDescription: "We’re always here for you—literally. Whether you need help placing an order, tracking a delivery, or resolving an issue, our friendly and knowledgeable customer support team is available 24/7. Reach us through live chat, email, or a quick phone call. We’re not just a support team—we’re your shopping partners, committed to helping you enjoy a smooth, stress-free experience from beginning to end."
        },
        {
            accordionTitle: "Wide Range of Products",
            accordionDescription: "Whatever you need, we’ve got it. Explore thousands of products across diverse categories, including premium furniture, trending electronics, stylish apparel, spiritual items, and much more. Our inventory is curated to meet every lifestyle and budget, ensuring you find exactly what you’re looking for—no compromises. Plus, we’re constantly updating our catalog with the latest trends, innovations, and seasonal must-haves so you never miss out."
        },
        {
            accordionTitle: "Seamless Shopping Experience",
            accordionDescription: "Our platform is built with you in mind. Enjoy intuitive navigation, fast-loading pages, and a responsive design that works beautifully on any device—mobile, tablet, or desktop. With powerful search and filter tools, personalized recommendations, and secure checkout processes, shopping feels less like a task and more like an experience. Whether you're browsing or buying, everything just works—smoothly, reliably, and with a touch of elegance."
        }
    ];

    
    return (

        <Container className='mt-5 accordion-container'>
            <div className="title  mt-5  d-flex align-items-center justify-content-center">
                <Title title={"Why Choose Us"} />
            </div>

            <div className="accordion" id="accordionExample">
                {accordionData.map((accordion, idx) => {
                    const headingId = `heading${idx}`;
                    const collapseId = `collapse${idx}`;
                    const isFirst = idx === 0;

                    return (
                        <div className="accordion-item" key={idx}>
                            <h2 className="accordion-header" id={headingId}>
                                <button
                                    className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded={isFirst ? 'true' : 'false'}
                                    aria-controls={collapseId}
                                >
                                    {accordion.accordionTitle}
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                aria-labelledby={headingId}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {accordion.accordionDescription}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Accordion;
