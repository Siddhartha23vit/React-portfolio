import React from 'react';

function Portfolio() {
  const portfolioData = {
    projects: [
      {
        title: "Project 1",
        description: "Revamped an existing auditing website to a better and responsive version.",
      },
      {
        title: "Project 2",
        description: "Developing the website for a start-up",
      },
      
    ]
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="nine columns main-col">
          <h2>Projects</h2>
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="row item">
              <div className="twelve columns">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
