import React from 'react';

function ContactUs() {
  const contactData = {
    email: "hvamshika@gmail.com",
    phone: "+91 8452352548",
    address: "Hyderabad, Telangana, India   ",
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="twelve columns">
          <h1>Contact Information</h1>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns">
          <p className="address">
            <span>Email: {contactData.email}</span>
            <br></br>
            <span>Phone: {contactData.phone}</span>
            <br></br>
            <span>Address: {contactData.address}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
