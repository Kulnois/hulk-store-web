import React, {useState } from 'react'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps'
import { savePaymentMethod } from '../redux/cart/cart.actions'

const PaymentView = ({ history }) => {
    
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={10} md={6}>
                <CheckoutSteps step1 step2 step3 />
                    <h1>Payment Method</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label as='legend'>Select Method</Form.Label>
                            <Col>
                                <Form.Check type='radio' label='PayPal or Credit Card'
                                id='Paypal' name='paymentMethod' value='PayPal' checked
                                onChange={(e) => setPaymentMethod(e.target.value)}>
                                </Form.Check>
                                <Form.Check type='radio' label='Stripe'
                                id='Stripe' name='paymentMethod' value='Stripe'
                                onChange={(e) => setPaymentMethod(e.target.value)}>
                                </Form.Check>
                            </Col>
                        
                        </Form.Group>

                        <Button type='submit' variant='primary'>Continue</Button>
                    </Form>
                </Col>
            </Row>            
        </Container>
    )
}

export default PaymentView