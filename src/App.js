import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Video from "./components/video";
// import Book from "./components/book";
import Blog from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Map from "./components/map";
import OurPackages from "./components/OurPackages";
import OurEvents from "./components/Ourevents";
import OurOffers from "./components/OurOffers";

import Loader from "./components/Loader";
import FloatingMenu from "./components/FloatingMenu"; 
import ScrollToTop from "./components/ScrollToTop"; 

import Package from "./pages/Package";
import Experience from "./pages/experience";
import PageContact from "./pages/pageContact";
import AboutUs from "./pages/aboutUs";
import Events from "./pages/events";
import OfferPage from "./pages/offerPage";

import Payment from "./pages/Payment";
import EventCele from "./pages/eventCele";
import EventCor from "./pages/eventCor";
import EventRally from "./pages/eventRally";

import Adventure from "./pages/Adventure";
import Obstacle from "./pages/Obstacle";
import Complementary from "./pages/Complementary";
import Throttle from "./pages/Throttle";
import ProDriver from "./pages/proDriver";

import WeekOffer from "./pages/weekOffer";
import InfluenceOffer from "./pages/influenceOffer";
import FestiveOffer from "./pages/festiveOffer";
import GroupOffer from "./pages/groupOffer";

import Rules from "./pages/Rules";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loader onFinish={() => setIsLoaded(true)} />;
  }

  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Video />
              <section id="OurPackages">
                <OurPackages />
              </section>
              <section id="OurEvents">
                <OurEvents />
              </section>
              <section id="OurOffers">
                <OurOffers />
              </section>
               <section id="blog">
                <Blog />
              </section>
              <section id="map">
                <Map />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
              <FloatingMenu /> 
            </main>
          }
        />

        <Route
          path="/Package"
          element={
            <>
              <Package />
              <Contact />
              <Footer />
              <FloatingMenu /> 
            </>
          }
        />

        <Route
          path="/Rules"
          element={
            <>
              <Video />
              <Rules />
              <Contact />
              <Footer />
              <FloatingMenu /> 
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
              <FloatingMenu />
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
              <FloatingMenu />
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
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Video />
              <Events />
              <Contact />
              <Footer />
              <FloatingMenu />
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
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/EventCele"
          element={
            <>
              <EventCele />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/EventCor"
          element={
            <>
              <EventCor />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/EventRally"
          element={
            <>
              <EventRally />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/Adventure"
          element={
            <>
              <Adventure />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/Complementary"
          element={
            <>
              <Complementary />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/Throttle"
          element={
            <>
              <Throttle />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/ProDriver"
          element={
            <>
              <ProDriver />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/Obstacle"
          element={
            <>
              <Obstacle />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/OfferPage"
          element={
            <>
              <Video />
              <OfferPage />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/WeekOffer"
          element={
            <>
              <WeekOffer />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/FestiveOffer"
          element={
            <>
              <FestiveOffer />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/GroupOffer"
          element={
            <>
              <GroupOffer />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
        <Route
          path="/InfluenceOffer"
          element={
            <>
              <InfluenceOffer />
              <Contact />
              <Footer />
              <FloatingMenu />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;