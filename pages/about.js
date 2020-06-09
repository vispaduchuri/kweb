import React from "react";
import AboutContent from "../components/about/AboutContent"

const AboutImage = () => {
  return (
    <>
      <div className="about-image" style={{ backgroundImage: "url(" + "/aboutUs.jpg" + ")" }}>
        <div className="about-header">
          <h1>ABOUT US</h1>
        </div>
      </div>
    </>
  )
}

const CompanyObjective = () => {
  return (
    <div className="objective">
      <div className="values">
        <h4> MISSION</h4>
        <p>To protect & care for people every day by pioneering future focused cleaning and hygiene technologies.</p>
      </div>
      <div className="values">
        <h4>VISSION</h4>
        <p>A healthy and safe world where people are free to live their lives.</p>
      </div>
      <div className="values">
        <h4> BRAND VALUES</h4>
        <p>Kukke Enterprise is committed to delivering innovative, sustainable solutions that help our customers achieve cleaner, safer and healthier surroundings in the most cost-effective manner. We're just as passionate about finding innovative ways to serve the communities that surround us.</p>
      </div>
    </div>
  )
}
const About = () => {
  return (
    <>
      <div className="about-us">
        <AboutImage />
        <div className="container-flexbox">
          <CompanyObjective />
          <AboutContent />
        </div>
      </div>
    </>
  )
}

export default About
