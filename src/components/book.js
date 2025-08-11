// import React from 'react';
// import './book.css';

// const Book = () => {
//   return (
//     <div className="book-section">
//       <div className="book-overlay">
//         <h1 className="book-title">
//           INDIA'S FIRST ALL TERRAIN VEHICLE ASHVA 4X4
//         </h1>
//         <p className="book-subtitle">
//           EXPLORE THE BEST ALL TERRAIN VEHICLES (ATV) IN INDIA. PRE BOOK OR GET A TRACK EXPERIENCE!
//         </p>
//         <button className="book-button">BOOK YOUR EXPERIENCE</button>
//       </div>
//     </div>
//   );
// };

// export default Book;





import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './book.css';

const Book = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const slides = [
    {
      title: "INDIA'S FIRST ALL TERRAIN VEHICLE ASHVA 4X4",
      subtitle:
        'EXPLORE THE BEST ALL TERRAIN VEHICLES (ATV) IN INDIA. PRE BOOK OR GET A TRACK EXPERIENCE!',
      image: require('../assets/CKZ_3550.jpg'),
    },
    {
      title: 'FEEL THE THRILL',
      subtitle:
        'Unleash adrenaline on dunes, forests, rivers, and more with India’s toughest 4x4.',
      image: require('../assets/CKZ_3550.jpg'),
    },
    {
      title: 'BUILT FOR ALL TERRAINS',
      subtitle:
        'Test your limits and dominate off-road conditions like never before.',
      image: require('../assets/CKZ_3550.jpg'),
    },
  ];

  return (
    <div className="book-carousel-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="book-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="book-overlay" data-aos="fade-up">
                <h1 className="book-title">{slide.title}</h1>
                <p className="book-subtitle">{slide.subtitle}</p>
                <button className="book-button">BOOK YOUR EXPERIENCE</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Book;
