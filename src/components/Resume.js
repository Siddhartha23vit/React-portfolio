import React from 'react';

function Resume() {
  const resumeData = {
    experience: [
      {
        title: "Web Developer",
        company: "Digital fortress Inc.",
        year: "2023 - Present",
        description: "Developed responsive websites using HTML, CSS, and JavaScript. Collaborated with a team to design and implement new features."
      },
      
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive Design",
  
    ]
  };

  return (
    <section id="resume">
      <div className="row">
        <div className="nine columns main-col">
          <h2>Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="row item">
              <div className="twelve columns">
                <h3>{exp.title}</h3>
                <p className="info">
                  {exp.company}<span>&bull;</span> <em className="date">{exp.year}</em>
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
          <h2>Skills</h2>
          <p>{resumeData.skills.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
