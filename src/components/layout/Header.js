import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Login from '../pages/Login';

import background from '../../assets/hero-header.png';
import logo from '../../assets/logo.svg';

function Header() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="lg" fixed="top">
            <img src={ background } className="header-image" alt="background" />
            <Container>
                <Navbar.Brand href="#home" className="menu-home">
                    <img src={ logo } width="35" height="35" className="d-inline-block align-top" alt="Logo"/>{' '}
                    HOME
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="#about" className="menu">ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#pricing" className="menu">PRICING</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="menu">CONTACT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-info" onClick={() => setModalShow(true)} className="login">Login</Button>{' '}
                            <Login show={modalShow} onHide={() => setModalShow(false)} />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;