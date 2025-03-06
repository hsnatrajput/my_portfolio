import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Projects from "./components/Project/Projects";
import BookingPage from "./Pages/BookingPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";


function App() {
     
  return (
    <div>
      <Navbar /> 
      <hr style={{ border: "3px solid rgba(255, 255, 255, 0.8)" }} />

        <Element name="home">
          <Home />
        </Element>

        <Element name="services">
          <Services />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="bookingpage">
          <BookingPage />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
        
        <Footer />
      </div>
  );
}

export default App;