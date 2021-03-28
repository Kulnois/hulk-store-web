import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer } from './product/product.reducers'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, 
    userUpdateProfileReducer, userListReducer, userDeleteReducer,
    userUpdateReducer } from './user/user.reducers'

import { cartReducer } from './cart/cart.reducers'

import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer, orderDeliverReducer } from './Order/order.reducers'

const reducer = combineReducers({
    productList: productListReducer,    
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
})

const cartItemsFormStorage = localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')) : []

const userInfoFormStorage = localStorage.getItem('userInfo') ? JSON.parse(
    localStorage.getItem('userInfo')) : null

const shippingAddressFormStorage = localStorage.getItem('shippingAddress') ? JSON.parse(
    localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFormStorage, shippingAddress: shippingAddressFormStorage },
    userLogin: { userInfo: userInfoFormStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store