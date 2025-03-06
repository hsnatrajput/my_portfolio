import React, { useEffect, useState } from "react";
import "./Services.css";
import Button from "../../components/Button/Button";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          console.error("Unexpected response format:", data);
          setServices([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setServices([]);
      });
  }, []);

  return (
    <section className="services-container">
      <div className="services-header">
        <div className="services-text">
          <h5 className="services-subtitle">My Services</h5>
          <h2 className="services-title">Empowering Your Digital Presence</h2>
          <p className="services-description">
            Welcome to my services section, where I offer a range of tailored
            solutions to boost your online presence. I’m your trusted partner in the digital world.
          </p>
        </div>
        <Button text="GET STARTED" to="contact" />
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <div className="service-icon">
               <img src={`http://localhost:5000${service.icon}`} alt={service.name} />  
            </div>
            <h3 className="service-title">{service.name}</h3>
            <p className="service-text">{service.description}</p>
            <Button text="GET STARTED" to="contact" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
