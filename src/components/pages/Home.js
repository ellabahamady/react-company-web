import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background from '../../assets/hero-bottom.png';
import homeImage from '../../assets/home.svg';

function Home() {
    return (
        <>
        <Container>
            <img src={ background } className="bottom-image" alt="background" />
            <Row id="home">
                <Col md={5} sm={12}></Col>
                <Col md={6} sm={12} className="home-title-container">
                    <p className="home-title">ERP software solutions for your business</p>
                    <p className="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col md={6} sm={12} className="home-comment-container">
                    <p className="home-comment">"Excepteur sint occaecat cupidatat non proident."</p>
                    <img src={ homeImage } className="home-image" alt="home" />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;