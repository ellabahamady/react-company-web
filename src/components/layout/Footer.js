import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

function Footer() {
    return (
        <>
        <Container id="footer">
            <Row>
                <Col md={3} sm={12} className="footer-link">
                    <h5>Links</h5>
                    <a href="#about" className="footer-link-menu">About</a>
                    <a href="#pricing" className="footer-link-menu">Pricing</a>
                    <a href="#contact" className="footer-link-menu">Contact</a>
                </Col>
                <Col md={3} sm={12} className="footer-link">
                    <h5>Social Media Links</h5>
                    <a href="#">
                        <img src={ linkedin } alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={ instagram } alt="instagram" />
                    </a>
                </Col>
                <Col md={12} sm={12}>
                    <div className="footer-copyright">
                        <h6>Copyright &copy; 2024. ERP Software Solutions. All rights reserved.</h6>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Footer;