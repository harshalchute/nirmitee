import React from 'react';
import { Navbar, Nav, Container, Card, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";

export default function Header() {


    const auth = useSelector(state => state.user)

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }



    return (<Navbar bg="light">
        <Container>
            <Navbar.Brand>
                <NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink style={{ textDecoration: 'none' }} to="/profile">My Profile</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <span style={{ cursor: 'pointer' }} className="nav-link" onClick={logout} >Logout</span>
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

