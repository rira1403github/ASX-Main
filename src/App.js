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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Video />
              <section id="book">
                <Book />
              </section>
              <Blog />
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </>
          }
        />
        <Route path="/bookride" element={<BookRide />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/pageContact" element={<PageContact />} />
      </Routes>
    </Router>
  );
}

export default App;
