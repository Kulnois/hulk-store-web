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
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
