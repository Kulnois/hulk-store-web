import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const LoginView = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const submitHandler = (e) => {
        e.preventDefault()
        
    }
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={10} md={6}>
                    <h1>Sing In</h1>
                    <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder='Enter email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Enter password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Sing In</Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New Customer? 
                        <Link to={redirect ? `/register?redirec=${redirect}` : '/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
                </Col>
            </Row>            
        </Container>
    )
}

export default LoginView
