import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image from '../../assets/about.svg';

function About() {
    return (
        <>
        <Container className="about-container">
            <Row>
                <Col md={6} sm={12}>
                    <img src={ image } className="about-image" alt="image" />
                </Col>
                <Col md={6} sm={12} className="about-text">
                    <p className="about-title">We develop high quality ERP software.</p>
                    <p className="about-description">Our team ready to help develop the applications of your choice.</p>
                    <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default About;