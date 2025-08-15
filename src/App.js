import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Video from './components/video';
import Book from './components/book';
import Blog from './components/blogs';
import Contact from './components/contact';
import Footer from './components/footer';

import BookRide from './pages/bookRide';
import Experience from './pages/experience';
import PageContact from './pages/pageContact';
import AboutUs from './pages/aboutUs';
import Events from './pages/events';
import Payment from './pages/Payment';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route
          path="/"
          element={
            <>
              <section id="book">
                <Book />
              </section>
                <Video />
              <section id="blog">
                <Blog />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </>
          }
        />

        <Route
          path="/bookride"
          element={
            <>
              <BookRide />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pageContact"
          element={
            <>
              <PageContact />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <>
              <AboutUs />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Events />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Payment />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
