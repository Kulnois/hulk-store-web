import axios from 'axios'
import ProductActionTypes from './product.types'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({ 
            type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ProductActionTypes.PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({ 
            type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ProductActionTypes.PRODUCT_DELETE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ProductActionTypes.PRODUCT_CREATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/products`, {}, config)

        dispatch({
            type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ProductActionTypes.PRODUCT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo }} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/products/${product._id}`, product, config)

        dispatch({
            type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        })
    }
}