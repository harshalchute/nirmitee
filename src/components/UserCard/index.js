import React from 'react';
import { Navbar, Nav, Container, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";

export default function UserCard() {


    const auth = useSelector(state => state.user)

    const dispatch = useDispatch();

    return (<div style={{
        textAlign: "center",
        marginTop: "64px",
        display: "flex",
        justifyContent: "center"
    }}>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>User Details</Card.Title>
                <Card.Text>
                    <div>
                        <i class="fa fa-user" style={{ fontSize: '48px' }}></i>
                    </div>
                    <p>{auth.user.name}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>)
}

