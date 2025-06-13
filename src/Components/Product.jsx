import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {
    return (
        <Container className="my-4">
            <Row>
                {/* Product Image Section */}
                <Col md={6}>
                    <img src={require('../img/furniture-21-300x300.jpg')} alt="Product" className="img-fluid" />
                </Col>

                {/* Product Details Section */}
                <Col md={6}>
                    <h5>Haworth</h5>
                    <h2>Glass Vase Minimalist Creative Hydroponic Striped Vase Ornament</h2>
                    <div>
                        <span>★★★☆☆ 3.0 (1 Review)</span>{" "}
                        <a href="#review">(Write a review)</a>
                    </div>

                    <ul className="list-unstyled mt-3">
                        <li>✅ Easy to assemble</li>
                        <li>✅ Maneuverability</li>
                        <li>✅ Value for money</li>
                    </ul>

                    <h3>$78</h3>
                    <span className="badge bg-success">In stock</span>

                    <Button variant="dark" size="lg" className="my-3">
                        + BUY PRODUCT
                    </Button>

                    <div>
                        <a href="#wishlist" className="me-2">
                            ♡ Add to wishlist
                        </a>
                        <a href="#compare">
                            ⇹ Add to compare
                        </a>
                    </div>

                    <div className="border p-3 mt-4">
                        <p>Special offer</p>
                        <ul>
                            <li>10% off, maximum $20 when paying with PayPal</li>
                            <li>50% off or more iPad cases, covers & keyboard folios</li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <p>SKU: D5722KBVCE</p>
                        <p>Categories: Beds, Office Furniture, Tables</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;
