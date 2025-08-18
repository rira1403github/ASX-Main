import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Slider from 'react-slick';
import './blogs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    "“ADRENALINE RUSH”",
    "“WILD TRAILS, WILDER MEMORIES”",
    "“EXTREME THRILLS UNLEASHED”",
    "“RIDE THE ROUGH WITH STYLE”",
    "“FEEL THE DIRT, LOVE THE DRIVE”"
  ];

  useEffect(() => {
    setBlogs([
      {
        title: "A-THON'S EXTREME LIMITS",
        description: "A-Thon’s Offroading delivers the ultimate adventure experience for thrill-seekers...",
        image: require('../assets/CKZ_3743.png'),
      },
      {
        title: "THE MUD LIFE CHOSE ME",
        description: "Drive through India’s most rugged terrains with our all-terrain monsters...",
        image: require('../assets/CKZ_3743.png'),
      }
    ]);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    arrows: true,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="blog-section">
      <h2 className="section-title red">OUR BLOGS</h2>
      <div className="blog-carousel-wrapper">
        <Slider {...sliderSettings} className="blog-carousel">
          {blogs.map((blog, index) => (
            <div
              className={`carousel-slide ${activeSlide === index ? 'fade-in' : ''}`}
              key={index}
            >
              <div className="carousel-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="carousel-text">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href={blog.link || "#"} className="read-more-btn">READ MORE →</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h2 className="section-title red">FAQ</h2>
      <div className="faq-section">
        {[
          "HOW DO I BOOK MY SLOT FOR AN ASHVA 4X4 EXPERIENCE?",
          "DO I NEED TO PAY ONLINE WHILE BOOKING?",
          "WHAT PAYMENT METHODS ARE ACCEPTED AT THE VENUE?"
        ].map((question, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {question}
              <span>{openIndex === index ? '∧' : '∨'}</span>
              {/* ▼ ▲ */}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? '200px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
              }}
            >
              sample answer.
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title red">TESTIMONIAL</h2>
      {/* <div className="testimonial">
        <h3>{testimonials[testimonialIndex]}</h3>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${testimonialIndex === index ? 'active' : ''}`}
              onClick={() => setTestimonialIndex(index)}
            ></span>
          ))}
        </div>
      </div> */}
      <div className="testimonial">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        allowTouchMove={true}   
        autoplay={true}   
        loop={true}       
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <h3>{item}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Blog;