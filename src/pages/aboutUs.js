import React, { useEffect } from 'react';
import './aboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiTarget, FiAward, FiUsers } from 'react-icons/fi';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="about-section" id="aboutUs">
        <h2 className="about-title" data-aos="fade-up">ABOUT US<br /><hr className="about-divider" data-aos="fade-up" data-aos-delay="100" /></h2>
        {/* <hr className="about-divider" data-aos="fade-up" data-aos-delay="100" /> */}

        <p className="about-subtext" data-aos="fade-up" data-aos-delay="200">
          At <span className="highlight">ASX Motodrome</span>, we believe in redefining off-road experiences. 
          With passion, precision, and performance at our core, we’ve created 
          adventures that push the limits of both driver and machine.
        </p>

        <div className="about-cards">
          <div className="about-card" data-aos="zoom-in">
            <FiTarget className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              To deliver thrilling, safe, and unforgettable off-road 
              experiences that inspire confidence and skill in every driver.
            </p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-delay="150">
            <FiAward className="about-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted name in off-road motorsport, 
              recognized for innovation, quality, and excellence.
            </p>
          </div>

          <div className="about-card" data-aos="zoom-in" data-aos-delay="300">
            <FiUsers className="about-icon" />
            <h3>Our Team</h3>
            <p>
              A passionate crew of experts dedicated to delivering 
              the highest level of adventure, safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;