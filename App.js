 import React from 'react';
 import './App.css';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './componets/pages/Home';
import Services from './componets/pages/Services';
import Product from './componets/pages/Product';
import SignUp from './componets/pages/SignUp';
function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'exact element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/services' element={<Services />} />


        </Routes> 
      </Router>

    </>

    
  );
}

export default App;
