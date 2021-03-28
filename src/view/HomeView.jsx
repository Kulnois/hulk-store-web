import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product/Product'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { listProducts } from '../redux/product/product.action'
import { useTranslation } from 'react-i18next'

const HomeView = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    
	const { t } = useTranslation('app')

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Últimos productos</h1>  
            { loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}         
        </>
    )
}

export default HomeView
