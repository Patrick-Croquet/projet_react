import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


export const NavigationBar = () => (
    <Styles>
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="monoton">Modern Choreographers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/khan" className="poiret">Akram Khan</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/carlson" className="poiret">Carolyn Carlson</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/preljocaj" className="poiret">Angelin Preljocaj</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/contact" className="poiret">News & Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </Styles>
)


const Styles = styled.div`
    .monoton {
        font-family: Monoton, cursive;
        color: #121212;
        text-transform: uppercase;
        font-size: 1.7em;
    }
    .monoton:hover{
        color: #E4E3E2;
    }

    .poiret {
        font-family: "Poiret One", cursive;
        color: #121212;
        text-transform: uppercase;
        font-size: 1.1em;
        text-decoration: none;
    }
    .poiret:hover{
        color: #E4E3E2;
    }
`