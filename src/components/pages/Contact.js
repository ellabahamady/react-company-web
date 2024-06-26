import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>
        <Container>
            <div id="contact">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={12} sm={12} className="contact-title">
                                <h3>Contact Us</h3>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="contact-text">
                                    <h6>Office Address:</h6>
                                    <h6>xxx street no 17, Jakarta, Indonesia</h6>
                                </div>
                                <div className="contact-text">
                                    <h6>Phone:</h6>
                                    <h6>021-1234567</h6>
                                </div>
                                <div className="contact-text">
                                    <h6>Email:</h6>
                                    <h6>contact@mail.com</h6>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                                    <Form.Control type="text" placeholder="name" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                                    <Form.Control type="phone" placeholder="+621234567890" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
                                    <Form.Control placeholder="Message" style={{ height: '100px' }}/>
                                </FloatingLabel>
                                <div className="d-grid gap-2">
                                    <Button variant="primary">
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </>
    );
}

export default Contact;