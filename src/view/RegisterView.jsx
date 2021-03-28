import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { register } from '../redux/user/user.actions'

const RegisterView = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }
    
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={10} md={6}>
                    <h1>Sing Up</h1>
                    {message && (<Message variant='danger'>{message}</Message>)}
                    {error && (<Message variant='danger'>{error}</Message>)}
                    {loading && <Loader />}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type='name' 
                                placeholder='Enter name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>
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
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type='password' 
                                placeholder='Enter password' 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>Register</Button>
                    </Form>
                    <Row className='py-3'>
                        <Col>
                            Have an Account? 
                            <Link to={redirect ? `/login?redirec=${redirect}` : '/register'}>
                                Login
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>            
        </Container>
    )
}

export default RegisterView
