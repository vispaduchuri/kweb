import React from "react";
import { SocialIcon } from "react-social-icons";

export const ContactApps = () => {
  return (
    <>
      <ul>
        <li>
          <SocialIcon
            url="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=pratap2345@gmail.com&amp;subject=enquiry"
            style={{ height: 30, width: 30 }}
          />
        </li>
        <li>
          <SocialIcon
            url="https://in.linkedin.com/in/pratap-paduchuri-00049650"
            style={{ height: 30, width: 30 }}
          />
        </li>
        <li>
          <SocialIcon
            url="https://api.whatsapp.com/send?phone=9740142333"
            style={{ height: 30, width: 30 }}
          />
        </li>
      </ul>
    </>
  )
}

const Contact = () => {
  return (
    <div className="row">
      <div className="social">
        <div className="header">
          <span>Contact Us</span>
        </div>
        <ContactApps />
      </div>
    </div>
  );
};

export default Contact;
