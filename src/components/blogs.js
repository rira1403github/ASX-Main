// import React, { useState } from 'react';
// import './blog.css';
// import image from '../assets/CKZ_3743.png';

// const Blog = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="blog-section">
//       {/* Blog Carousel */}
//       <h2 className="section-title red">OUR BLOGS</h2>
//       <div className="carousel">
//         {/* Left Arrow */}
//         <button className="carousel-arrow left">{'<'}</button>

//         <div className="carousel-image">
//           <img src={image} alt="Blog" />
//         </div>

//         <div className="carousel-text">
//           <h3 className="carousel-heading">A-THON’S EXTREME LIMITS</h3>
//           <p className="carousel-description">
//             “A-Thon’s Offroading Delivers The Ultimate Adventure Experience For
//             Thrill-Seekers Who Crave Rugged Terrain And Untamed Landscapes.....”
//           </p>
//           <button className="read-more-btn">READ MORE →</button>
//         </div>

//         {/* Right Arrow */}
//         <button className="carousel-arrow right">{'>'}</button>
//       </div>

//       {/* Dots */}
//       <div className="carousel-dots">
//         <span className="dot active"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div>

//       {/* FAQ Section */}
//       <h2 className="section-title red">FAQ</h2>
//       <div className="faq-section">
//         {[
//           'HOW DO I BOOK MY SLOT FOR AN ASHVA 4X4 EXPERIENCE?',
//           'DO I NEED TO PAY ONLINE WHILE BOOKING?',
//           'WHAT PAYMENT METHODS ARE ACCEPTED AT THE VENUE?',
//         ].map((question, index) => (
//           <div
//             className="faq-item"
//             key={index}
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="faq-question">
//               {question}
//               <span>{openIndex === index ? '▲' : '▼'}</span>
//             </div>
//             {openIndex === index && (
//               <div className="faq-answer">
//                 This is a sample answer. Replace with real content.
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Testimonial Section */}
//       <h2 className="section-title red">TESTIMONIAL</h2>
//       <div className="testimonial">
//         <h3>“ADRELINE RUSH”</h3>
//         <div className="dots">
//           <span className="dot active"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;









// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import './blog.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//   setBlogs([
//     {
//       title: "A-THON'S EXTREME LIMITS",
//       description: "“A-Thon’s Offroading Delivers The Ultimate Adventure Experience For Thrill-Seekers...",
//       image: require('../assets/CKZ_3743.png'), // Use actual image from assets
//     },
//     {
//       title: "THE MUD LIFE CHOSE ME",
//       description: "Drive through India’s most rugged terrains with our all-terrain monsters...",
//       image: require('../assets/CKZ_3743.png'),
//     }
//   ]);
// }, []);


//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     swipe: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="blog-section">
//       <h2 className="section-title red">OUR BLOGS</h2>
//       <Slider {...sliderSettings} className="blog-carousel">
//         {blogs.map((blog, index) => (
//           <div className="carousel-slide" key={index}>
//             <div className="carousel-image">
//               <img src={blog.image} alt={blog.title} />
//             </div>
//             <div className="carousel-text">
//               <h3>{blog.title}</h3>
//               <p>{blog.description}</p>
//               <a href={blog.link || "#"} className="read-more-btn">READ MORE →</a>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       <h2 className="section-title red">FAQ</h2>
//       <div className="faq-section">
//         {[
//           "HOW DO I BOOK MY SLOT FOR AN ASHVA 4X4 EXPERIENCE?",
//           "DO I NEED TO PAY ONLINE WHILE BOOKING?",
//           "WHAT PAYMENT METHODS ARE ACCEPTED AT THE VENUE?"
//         ].map((question, index) => (
//           <div
//             key={index}
//             className={`faq-item ${openIndex === index ? 'open' : ''}`}
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="faq-question">
//               {question}
//               <span>{openIndex === index ? '▲' : '▼'}</span>
//             </div>
//             <div
//               className="faq-answer"
//               style={{
//                 maxHeight: openIndex === index ? '200px' : '0px',
//                 overflow: 'hidden',
//                 transition: 'max-height 0.5s ease',
//               }}
//             >
//               This is a sample answer. Replace with real content.
//             </div>
//           </div>
//         ))}
//       </div>

//       <h2 className="section-title red">TESTIMONIAL</h2>
//       <div className="testimonial">
//         <h3>“ADRENALINE RUSH”</h3>
//         <div className="dots">
//           <span className="dot active"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;










import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './blog.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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
        description: "“A-Thon’s Offroading Delivers The Ultimate Adventure Experience For Thrill-Seekers...",
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
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="blog-section">
      <h2 className="section-title red">OUR BLOGS</h2>
      <Slider {...sliderSettings} className="blog-carousel">
        {blogs.map((blog, index) => (
          <div className="carousel-slide" key={index}>
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
              This is a sample answer. Replace with real content.
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title red">TESTIMONIAL</h2>
      <div className="testimonial">
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
      </div>
    </div>
  );
};

export default Blog;
