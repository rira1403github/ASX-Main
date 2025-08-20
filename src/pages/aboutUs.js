import React, { useEffect } from "react";
import "./aboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="about-section" id="aboutUs">
        <div className="section-header" data-aos="fade-up">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-subtext" style={{ textAlign: "center" }}>
            THE STORY OF ASX MOTODROME
          </p>
          <hr
            className="about-divider"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>

        <p className="about-subtext" data-aos="fade-up" data-aos-delay="200">
          <span className="highlight">ASX Motodrome</span> was born from a
          vision — to create India’s first true off-road experiential hub, where
          thrill, adventure, and innovation come together. Founded by motorsport
          enthusiasts and adventurers, ASX Motodrome exists to provide people
          with an experience that goes beyond ordinary driving. India has
          countless highways and city roads, but very few places where you can
          truly unleash the spirit of off-roading. That gap gave birth to ASX
          Motodrome — a space built not just for driving, but for creating
          unforgettable experiences, building community, and igniting a culture
          of adventure.
        </p>

        <div className="section-header" data-aos="fade-up">
          <h2 className="about-title">WHO WE ARE</h2>
        </div>

        <p className="about-subtext" data-aos="fade-up" data-aos-delay="300">
          <span className="highlight">ASX Motodrome</span> is more than just a
          track — it’s a destination for adventure seekers, learners, and thrill
          lovers. With world-class off-road obstacles, high-speed dirt tracks,
          passenger thrill rides, and curated self-drive experiences, we are
          redefining motorsport and adventure entertainment in India.
        </p>
        <p className="about-subtext" data-aos="fade-up" data-aos-delay="320">
          We are also proud to be the exclusive dealer and first-ever experience
          centre for <span className="highlight">A-THON’s</span> flagship
          off-road vehicle, the <span className="highlight">ASHVA 4X4</span> —
          India’s first made-in-India, engineered-for-India utility ATV/UTV
          platform. Built with pride and innovation, the ASHVA 4X4 combines
          rugged performance with adaptability. This makes ASX Motodrome the
          only place in India where you can experience the ASHVA 4X4 first-hand,
          as well as the gateway for adventurers and organizations to own this
          path-breaking machine.
        </p>

        <div className="section-header" data-aos="fade-up">
          <h2 className="about-title">WHAT WE OFFER</h2>
        </div>

        <ul
          className="about-subtext"
          data-aos="fade-up"
          data-aos-delay="350"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            <span className="highlight">Off-Road Packages:</span> Tailored for
            beginners, enthusiasts, and adrenaline seekers with training,
            obstacles, and high-speed tracks.
          </li>
          <li>
            <span className="highlight">Events & Celebrations:</span> Corporate
            outings, team-bonding activities, birthdays, anniversaries, rallies,
            and motorsport championships.
          </li>
          <li>
            <span className="highlight">Exclusive ASHVA 4X4 Experiences:</span>{" "}
            The only destination in India to test-ride and purchase the proudly
            made-in-India ASHVA 4X4.
          </li>
          <li>
            <span className="highlight">Influencer & Brand Collaborations:</span>{" "}
            A creative playground for content creators and brands looking to
            showcase thrill in action.
          </li>
          <li>
            <span className="highlight">Community Hub:</span> A meeting point
            for motorsport fans, off-roaders, and adventure seekers to connect
            and share their passion.
          </li>
        </ul>

        <div className="section-header" data-aos="fade-up">
          <h2 className="about-title">OUR VISION</h2>
        </div>

        <p className="about-subtext" data-aos="fade-up" data-aos-delay="300">
          To redefine motorsport and adventure culture in India by building a
          world-class off-road ecosystem that inspires thrill, learning, and
          pride in Made-in-India innovations. With ASX Motodrome, we aim to
          expand into rallies, workshops, championships, and experiential
          festivals — making us the ultimate destination for off-road adventure.
        </p>
        <p className="about-subtext" data-aos="fade-up" data-aos-delay="320">
          As partners of <span className="highlight">A-THON</span>, we also
          carry the mission to promote and empower Indian-engineered mobility
          solutions like the ASHVA 4X4 across multiple sectors.
        </p>

        <div className="section-header" data-aos="fade-up">
          <h2 className="about-title">WHAT DRIVES US</h2>
        </div>

        <ul
          className="about-subtext"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>
            <span className="highlight">Adventure with Safety:</span> Thrill
            designed under professional guidance and strict safety protocols.
          </li>
          <li>
            <span className="highlight">Innovation with Pride:</span> Delivering
            India’s first indigenous ATV/UTV — the ASHVA 4X4.
          </li>
          <li>
            <span className="highlight">Experiences for Everyone:</span> From
            first-timers to experts, from small teams to global MNCs.
          </li>
          <li>
            <span className="highlight">Building Culture:</span> Creating a
            community where off-roading is not just a ride, but a lifestyle.
          </li>
        </ul>

        <p
          className="about-subtext"
          data-aos="fade-up"
          data-aos-delay="450"
          style={{ fontWeight: 900, textAlign: "center" }}
        >
          At <span className="highlight">ASX Motodrome</span>, every drive is
          more than an activity — it’s an experience that fuels stories, builds
          bonds, and celebrates India’s spirit of adventure and innovation.
          Whether you come for fun, corporate bonding, celebration, or to
          experience the revolutionary ASHVA 4X4, you’ll leave with memories
          that last far beyond the track.
        </p>

        <p
          className="about-subtext"
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ fontWeight: 900, textAlign: "center" }}
        >
          ASX Motodrome — Where Adventure Meets Experience, and Where India’s
          First Proudly Made Off-Road Machine Lives.
        </p>
      </section>
    </>
  );
};

export default AboutUs;