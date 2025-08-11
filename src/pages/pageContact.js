import React, { useEffect } from 'react';
import './pageContact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiPhone, FiMail, FiCompass } from 'react-icons/fi';
import Footer from '../components/footer';

const PageContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="pageContact-section" id="pageContact">
      <h2 className="pageContact-title" data-aos="fade-up">TO CONNECT WITH US</h2>
      <hr className="pageContact-divider" data-aos="fade-up" data-aos-delay="100" />
      <p className="pageContact-subtext" data-aos="fade-up" data-aos-delay="200">
        Have a project in mind or need thermoforming expertise? <br /> Get in touch —
        our team is here to help you bring your ideas to life.
      </p>

      <div className="pageContact-cards">
        <div className="pageContact-card" data-aos="zoom-in">
          <FiPhone className="pageContact-icon" />
          <p style={{ fontFamily: 'monospace', fontSize: '20px', fontWeight: '50'}}>
            <a href="tel:+917698001209" style={{ textDecoration: 'none', color: 'black' }}>+91 7624881965</a></p>
        </div>
        <div className="pageContact-card" data-aos="zoom-in" data-aos-delay="150">
          <FiMail className="pageContact-icon" />
          <p><a href="mailto:atp@a-thonallterrain.com">team@asxmotodrome.com</a></p>
        </div>
        <div className="pageContact-card" data-aos="zoom-in" data-aos-delay="300">
          <FiCompass className="pageContact-icon" />
          <p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=next+to+AL+MIraj+Convention+Centre,+Shauhardha+Layout,+Hoskote,+Karnataka+562114"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default PageContact;
