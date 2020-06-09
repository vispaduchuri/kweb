import React from 'react';
import { ContactApps } from "../footer/Contact";
import { MailIcon } from "../common/icons"
const AddressLocation = () => {
  return (
    <div className="add-container">
      <div className="logo">
        <img src="/gps.png" />
      </div>
      <div className="full-address">
        <p>Shop No.5, Site No.5 96/1</p>
        <p>Jakkur Village, Yelahanka</p>
        <p>Bangalore, Karnataka 560064</p>
      </div>
    </div>
  )
}

const PhoneNumber = () => {
  return (
    <div className="add-container">
      <div className="logo">
        <img src="/mobile.png" />
      </div>
      <div className="phone-number">
        <p>
          <a href="tel:9513714455">+91 95137 14455</a>
        </p>
      </div>
    </div>
  )
}

const EmailAddress = () => {
  return (
    <div className="add-container">
      <div className="logo">
        <img src="/mail.png" />
      </div>
      <div className="email-address">
        <a href="mailto:sales@kukkeenterprise.com">sales@kukkeenterprise.com</a>
      </div>
    </div>
  )
}

const AddressDetails = () => {
  return (
    <div className="address-details">
      <div className="address-location">
        <h3>Bengaluru Office</h3>
      </div>

      <ul>
        <li>
          <AddressLocation />
        </li>
        <li>
          <PhoneNumber />
        </li>
        <li>
          <EmailAddress />
        </li>
      </ul>
      <div className="apps">
        <ContactApps />
      </div>
    </div>
  )
}

export default AddressDetails;
