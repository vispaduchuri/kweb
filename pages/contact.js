import React, { useState, useEffect } from "react";
import AddressDetails from "../components/contact/AddressDetails"
import Spinner from "../components/common/Spinner"

const GoogleMap = () => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      setTimeout(() => {
        setLoaded(true)
      }, 1000)
    } catch (e) { }
  }, [])

  return (
    <>
      <div className="Map">
        {!isLoaded && <div className="spinner"><Spinner /></div>}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31094.341307345803!2d77.58199492159999!3d13.048865561523977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19bfeaf7ccb7%3A0x47503d9682e9fb0b!2sKukke%20Enterprise!5e0!3m2!1sen!2sin!4v1590925129386!5m2!1sen!2sin" onLoad={() => setLoaded(true)} frameBorder="0"
          allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </>
  )
}

export const ContactHeader = () => {
  return (
    <>
      <div className="contact-image" style={{ backgroundImage: "url(" + "/contactUs.jpg" + ")" }}>
        <div className="contact-header">
          <h1>CONTACT US</h1>
        </div>
      </div>
    </>
  )
}

const Contact = () => {
  return (
    <div className="contact">
      <ContactHeader />
      <div className="container-flexbox">
        <GoogleMap />
        <AddressDetails />
      </div>
    </div>
  )
};

export default Contact;
