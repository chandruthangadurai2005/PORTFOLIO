import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiC,
  SiCplusplus,
  SiPostman,
  SiScikitlearn,
  SiFlask,
  SiPandas
} from "react-icons/si";

function Skills() {

  const skills = {
    Languages: [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> }
],

    Backend: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: <FaNodeJs /> },
      { name: "Node.js", icon: <FaNodeJs /> }
    ],

    Frontend: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> }
    ],

    Databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],

    "Machine Learning": [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Pandas", icon: <SiPandas /> }
    ],

    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <FaLinux /> }
    ]
  };

  return (

    <section id="skills">

      <div className="container">

        <h2>Skills</h2>

        <div className="skills-grid">

          {Object.entries(skills).map(([category, items], index) => (

            <div key={index} className="skill-card">

              <h3>{category}</h3>

              <div className="skill-list">

                {items.map((skill, i) => (

                  <span key={i} className="skill-badge">

                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    {skill.name}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;