import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './bookRide.css';
import rideImage from '../assets/CKZ_3773.jpg';
import Contact from '../components/contact';
import Footer from '../components/footer';

// Dummy API simulation
const fetchRideData = () => {
  return Promise.resolve([
    {
      id: 'pro-training',
      title: 'PRO DRIVER TRAINING SESSION',
      subtitle: 'Learn From The Experts - Master The Art Of Off-Road Driving!',
      description:
        'Join Our Off-Road Experts For A Hands-On Training Session Covering Essential Off-Road Driving Techniques To Handle The Toughest Terrains With Confidence For 5 Minutes Session.',
    },
    {
      id: 'full-throttle',
      title: 'FULL THROTTLE EXPERIENCE',
      subtitle: 'Feel The Adrenaline - Push The Ashva 4x4 To Its Limits!',
      description:
        'Designed For Thrill-Seekers, This High-Speed Track Lets You Experience The Raw Power And Handling Capabilities Of The Ashva 4x4 On An Extreme Off-Road Circuit For 10 Minutes.',
    },
  ]);
};

const BookRide = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    fetchRideData().then((data) => setRides(data));
  }, []);

  return (
    <>
      <section className="book-ride-section" id="bookRide">
        {rides.map((ride, index) => (
          <motion.div
            className="ride-card"
            key={ride.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="ride-image">
              <img src={rideImage} alt={ride.title} />
            </div>
            <div className="ride-content">
              <h2 className="ride-title red">{ride.title}</h2>
              <p className="ride-subtitle">{ride.subtitle}</p>
              <p className="ride-description">{ride.description}</p>
              <ScrollLink to="bookingForm" smooth duration={500}>
                <button className="book-btn">BOOK NOW</button>
              </ScrollLink>
            </div>
          </motion.div>
        ))}
      </section>

      
      {/* Booking FORM  
      <section id="bookingForm" className="booking-form">
        <h2 className="red">Booking Form</h2>
        <p style={{ color: '#ccc' }}>Replace this with your actual form component</p>
        {/* Add your actual booking form here }
      </section>  */}

      
      <Contact />
      <Footer />
    </>
  );
};

export default BookRide;
