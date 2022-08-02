// Followed the following tutorials:
// Beginner React Site by Code Commerce (youtu.be/bms_e55PtmE)
// Beginner React JS Project by Brian Design (youtu.be/I2UBjN5ER4s) 

// Functionality imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Importing the main items for the site
import Navbar from './Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Order from './pages/Order';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
