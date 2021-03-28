import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeView from './view/HomeView'
import ProductView from './view/ProductView'
import LoginView from './view/LoginView'
import RegisterView from './view/RegisterView'
import CartView from './view/CartView'
import ProfileView from './view/ProfileView'
import Footer from './components/Footer/Footer'
import OrderListView from './view/OrderListView'
import OrderView from './view/OrderView'
import PaymentView from './view/PaymentView'
import PlaceOrderView from './view/PlaceOrderView'
import ProductEditView from './view/ProductEditView'
import ProductListView from './view/ProductListView'
import ShippingView from './view/ShippingView'
import UserListView from './view/UserListView'
import UserEditView from './view/UserEdit'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact />
          <Route path='/cart/:id?' component={CartView}  />  
          <Route path='/login' component={LoginView}  />
          <Route path='/product/:id' component={ProductView}  />
          <Route path='/profile' component={ProfileView}  />
          <Route path='/register' component={RegisterView}  />
          <Route path='/admin/orderlist' component={OrderListView}  /> 
          <Route path='/order/:id' component={OrderView}  />       
          <Route path='/payment' component={PaymentView}  /> 
          <Route path='/placeorder' component={PlaceOrderView}  />  
          <Route path='/admin/product/:id/edit' component={ProductEditView}  />
          <Route path='/admin/productlist' component={ProductListView}  />       
          <Route path='/shipping' component={ShippingView}  /> 
          <Route path='/admin/userList' component={UserListView}  />
          <Route path='/admin/user/:id/edit' component={UserEditView}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
