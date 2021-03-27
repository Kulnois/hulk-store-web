import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader/Loader'
import Product from '../components/Product/Product'

const HomeView = () => {

    const productList = [
        {   
            _id: 323,
            name: 'Camiseta Hombre',
            image: 'https://dafitistaticco-a.akamaihd.net/p/kuva-3248-0791841-1-zoom.jpg',
            price: 80000,
            rating: 4.5,
            numReviews: 323 },
        {   
            _id: 323,
            name: 'Camiseta Mujer',
            image: 'https://dafitistaticco-a.akamaihd.net/p/kuva-3248-0791841-1-zoom.jpg',
            price: 80000,
            rating: 4.5,
            numReviews: 323 },
    ]

    return (
        <>
            <h1>Últimos productos</h1>  
            {/* <Loader />  */}
            <Row>
                {productList.map(product => (
                    <Col sm={12} md={6} lg={4} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>         
        </>
    )
}

export default HomeView
