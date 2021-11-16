import React, { useEffect, useState } from 'react';
import { Container, FormControl, Nav, Navbar, Button, Form, Row } from 'react-bootstrap';
import { Link, NavLink, LinkContainer } from 'react-router-dom';
import './Menubar.css'
const Menubar = () => {


    return (
        <>
            <div>
                <Navbar bg="light" expand="md">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavLink to="/" activeClassName="selected">
                                    Home
                                </NavLink>
                                <NavLink to="/restaurent" activeClassName="selected">
                                    Restaurent
                                </NavLink>
                                <NavLink to="/meal" activeClassName="selected">
                                    Meal
                                </NavLink>
                                <NavLink to="/details" activeClassName="selected">
                                    Details
                                </NavLink>
                                <NavLink to="/delete" activeClassName="selected">
                                    Delete
                                </NavLink>


                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    );
};

export default Menubar;