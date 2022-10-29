import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Container, Form, Row, Col, Button, FormLabel } from "react-bootstrap";

import { login, isUserLoggedIn } from "../../actions";


const Login = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, [user.authenticate])

    const userLogin = (e) => {
        e.preventDefault()
        const user = { name }
        dispatch(login(user))
    }

    if (user.authenticate) {
        return <Redirect to={'/'} />
    }

    return (<Container>
        <Row style={{ marginTop: '48px' }}>
            <Col md={{ span: 6, offset: 3 }}>
                {/* <FormLabel>Login Form</FormLabel> */}
                <Form onSubmit={userLogin}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>)
}

export default Login;