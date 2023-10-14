import React from 'react';

function About() {
  const aboutData = {
    name: "Siddhartha Sukhavasi",
    address: "Hyderabad, Telanagana, India",
    website: "www.sid.com",
    aboutme: "I'm a web developer with a passion for creating user-friendly and visually appealing websites. I have experience in HTML, CSS, JavaScript, and various web development frameworks."
  };

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/Profile.jpg" alt="Profile" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{aboutData.aboutme}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Personal Info</h2>
              <p className="address">
                <span>{aboutData.name}</span>
                <br></br>
                <span>{aboutData.address}</span>
                <br></br>
                <span>{aboutData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
