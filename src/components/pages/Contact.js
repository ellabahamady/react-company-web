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
            <Card>
                <Card.Body>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="contact-text">
                                <p className="contact-label">Office Address:</p>
                                <p className="contact-name">xxx street no 17, Jakarta, Indonesia</p>
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Phone:</p>
                                <p className="contact-name">021-1234567</p>
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Email:</p>
                                <p className="contact-name">contact@mail.com</p>
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
        </Container>
        </>
    );
}

export default Contact;