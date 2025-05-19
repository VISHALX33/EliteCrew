import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SignupLogin from './components/SignupLogin';
import Job from './components/job';
import BackToTop from './components/BackToTop'; // Import the BackToTop component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Services />
                <Team />
                <Job />
                <Testimonials />
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Services Page */}
          <Route path="/services"element={<><Services /><Footer /></>}/>

          {/* About Us Page */}
          <Route path="/about" element={ <> <AboutUs /><Footer /></>}/>

          {/* Contact Us Page */}
          <Route path="/contact" element={ <> <ContactUs /> <Footer /></>}/>

          <Route path="/jobs" element={ <><Job /> <Footer /></>}/>

          {/* Signup/Login Page */}
          <Route
            path="/signup-login" element={<> <SignupLogin /><Footer /> </>}/></Routes>
        <BackToTop /> {/* Add the BackToTop component here */}
      </div>
    </Router>
  );
}

export default App;