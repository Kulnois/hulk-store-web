import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeView from './view/HomeView'
import ProductView from './view/ProductView'
import LoginView from './view/LoginView'
import RegisterView from './view/RegisterView'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} exact />
          <Route path='/login' component={LoginView}  />
          <Route path='/register' component={RegisterView}  />
          <Route path='/product/:id' component={ProductView}  />
        </Container>
      </main>
    </Router>
  );
}

export default App;
