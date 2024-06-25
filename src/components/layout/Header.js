import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import background from '../../assets/hero-header.svg';
import logo from '../../assets/logo.svg';

function Header() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" fixed="top">
            <img src={ background } className="header-hero" />
            <Container>
                <Navbar.Brand href="#home" className="text-menu-home">
                    <img src={ logo } width="35" height="35" className="d-inline-block align-top" alt="Logo"/>{' '}
                    HOME
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#about" className="text-menu">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#pricing" className="text-menu">PRICING</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact" className="text-menu">CONTACT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="outline-info" onClick={() => setModalShow(true)}>Login</Button>{' '}
                        <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

function LoginModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter" centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="d-grid gap-2">
                <Button variant="primary">Login</Button>
            </div>
        </Modal.Body>
      </Modal>
    );
}

export default Header;