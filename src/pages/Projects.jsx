function Projects() {

  const projects = [
    {
      title: "Vehicle Services Platform (Microservices)",
      description:
        "Microservices-based vehicle service management platform implementing service discovery and secure REST APIs.",
      tech: "Java, Spring Boot, MySQL, JWT, Eureka",
      github: "https://github.com/chandruthangadurai2005/VEHICLE-SERVICES"
    },
    {
      title: "AI Crop Yield Prediction System",
      description:
        "Machine learning system predicting crop yield using environmental and climate data.",
      tech: "Python, Scikit-learn, Flask, HTML, CSS, JavaScript",
      github: "https://github.com/chandruthangadurai2005/Crop-Yield-Prediction"
    },
    {
      title: "Government CRM Vehicle Tracking System",
      description:
        "Full-stack fleet tracking platform supporting GPS monitoring and map visualization.",
      tech: "React, Node.js, Express, MySQL, Sequelize, Leaflet",
      github: "https://github.com/chandruthangadurai2005/GOV-CRM-TRACKER"
    }
  ];

  return (
    <section id="projects">

      <div className="container">

        <h2>Projects</h2>

        <div className="project-grid">

          {projects.map((project, index) => (

            <div key={index} className="project-card">

              <h3>{project.title}</h3>

              <p className="project-desc">
                {project.description}
              </p>

              <p className="project-tech">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>GitHub</button>
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;