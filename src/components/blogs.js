import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

import testimonialReel from '../assets/Testimonial.mp4'; 
import './blogs.css';
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(() => {
            console.log("Autoplay blocked, requires user interaction");
          });
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

  const faqQuestions = [
    "HOW DO I BOOK MY SLOT FOR AN ASHVA 4X4 EXPERIENCE?",
    "DO I NEED TO PAY ONLINE WHILE BOOKING?",
    "WHAT PAYMENT METHODS ARE ACCEPTED AT THE VENUE?"
  ];

  const testimonials = [
    "“ADRENALINE RUSH”",
    "“WILD TRAILS, WILDER MEMORIES”",
    "“EXTREME THRILLS UNLEASHED”",
    "“RIDE THE ROUGH WITH STYLE”",
    "“FEEL THE DIRT, LOVE THE DRIVE”"
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="blog-section">
      <h2 className="section-title red" data-aos="fade-right">FAQ</h2>
      <div className="faq-section">
        {faqQuestions.map((question, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="faq-question">
              {question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
              }}
            >
              <p>
                This is a sample answer for: <b>{question}</b>.  
                You can customize with actual booking/payment info here.
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title red" data-aos="fade-left">TESTIMONIAL</h2>
      <div className="testimonial">
        <div className="testimonial-video" data-aos="zoom-in">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            autoPlay
            muted   
            loop
            playsInline
            controls={false} 
            onEnded={handleVideoEnd}
          >
            <source src={testimonialReel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <h3 data-aos="fade-up" data-aos-delay={index * 150}>{item}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;