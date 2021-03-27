import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating/Rating'

const ProductView = ({ histoy, match }) => {

    const product = {   
        _id: 323,
        name: 'Camiseta Hombre',
        image: 'https://dafitistaticco-a.akamaihd.net/p/kuva-3248-0791841-1-zoom.jpg',
        price: 80000,
        rating: 4.5,
        numReviews: 323,
        description: 'Este producto cuenta con un tipo adaptativo de tela...' }
    
    return (
        <>
            <Link className='btn btn-ligth my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid /> 
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews}`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: ${product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
            </Row>
        </>
    )
}

export default ProductView