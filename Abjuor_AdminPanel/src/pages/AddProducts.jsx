import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../style/addproduct.scss';
import Base_Url from '../../../Abjuor_FrontEnd/src/config/Base_Url';

function AddProducts() {

    const [inputsValue, setInputsValue] = useState({
        productName: "",
        category: "",
        productPrice: "",
        productOldPrice: "",
        productImg: "",
        subImg1: "",
        subImg2: "",
        asideTitle: "",
        tags: "",
        rating: "",
        categories: "",
        DeliveryInfo: " ",
        keyFeature: " ",
        description: ""
    })

    const payload = () => {
        productName = Inputsvalues.productName,
            category = Inputsvalues.category,
            productPrice = Inputsvalues.price,
            productOldPrice = Inputsvalues.oldPrice,
            productImg = Inputsvalues.productImg,
            Img1 = Inputsvalues.Img1,
            Img2 = Inputsvalues.Img2,
            asideTitle = Inputsvalues.asideTitle,
            tags = Inputsvalues.tags,
            rating = Inputsvalues.rating,
            categories = Inputsvalues.categories,
            DeliveryInfo = Inputsvalues.DeliveryInfo,
            keyFeature = Inputsvalues.keyFeature,
            DeliveryInfo = Inputsvalues.DeliveryInfo
    }

    const Inputsvalues = (e) => {
        const { name, value } = e.target;
        setInputsValue(prev => ({
            ...prev, [name]: value
        }))
    }

    console.log("inputsValue", inputsValue);

    const fetchData = () => {
        try {

            const response = fetch(`${Base_Url}/add-product`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputsValue)
            })

            if (!response) {
                throw new Error('Failed to add product')
            }
            alert("Product Added Succsessfully")
        }
        catch (error) {
            console.log("error", error.message)
        }
    }


    return (
        <Container>
            <Form onSubmit={fetchData} >
                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='productName' type="text" placeholder="Product Name" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='category' type="text" placeholder="Category" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='productPrice' type="text" placeholder="Product Price" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Old Price</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='productOldPrice' type="text" placeholder="Old Price" />
                        </Form.Group>
                    </Col>
                </Row>

                 <Row className="mb-4">
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Main Image</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='productImg' type="file" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Sub Image 1</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='subImg1' type="file" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group>
                            <Form.Label>Sub Image 2</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='subImg2' type="file" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Aside Title</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='asideTitle' type="text" placeholder="Aside Title" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='tags' type="text" placeholder="Tags (comma separated)" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='rating' type="text" placeholder="Rating" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Categories</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='categories' type="text" placeholder="Categories" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Delivery Info</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='DeliveryInfo' type="text" placeholder="Delivery Info" />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Key Features (JSON)</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='keyFeature' type="text" placeholder='e.g., ["Feature 1", "Feature 2"]' />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={12}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={Inputsvalues} name='description' as="textarea" rows={4} placeholder="Product Description" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col lg={12}>
                        <button>Add Product</button>
                    </Col>
                </Row>


            </Form>
        </Container>
    );
}

export default AddProducts;
