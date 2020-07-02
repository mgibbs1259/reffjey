import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <Navbar>
            <Navbar.Brand href="/">reffjey</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#tour">Tour</Nav.Link>
                    <Nav.Link href="#merch">Merch</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
