import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects") 
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="projects">
      <div className="projects-header">
        <div className="projects-left">
          <h5 className="projects-subtitle">MY PORTFOLIO</h5>
          <div className="projects-title-container">
            <h2 className="projects-title">
              Take A Look At My <br /> Recent Projects
            </h2>
            <p className="projects-description">
              Welcome to my portfolio, where you can discover a selection of projects
              I’ve had the privilege to work on. Each project represents a unique challenge, 
              and I’ve delivered innovative solutions tailored to the clients’ needs.
            </p>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;







// import React from "react";
// import project1 from "../../assets/doctor.jpg";
// import project2 from "../../assets/gurantee.webp";
// import project3 from "../../assets/bug_track.jpg";
// import project4 from "../../assets/zwap.png";
// import project5 from "../../assets/chotu.webp";
// import project6 from "../../assets/gym.jpg";
// import "./Projects.css";

// const projects = [
//   { id: 1, image: project1, title: "Doctor Appointment System" },
//   { id: 2, image: project2, title: "Gurantee App" },
//   { id: 3, image: project3, title: "Bug Track System" },
//   { id: 4, image: project4, title: "ZWAP Items Exchange App" },
//   { id: 5, image: project5, title: "Chotu App" },
//   { id: 6, image: project6, title: "Gym Management System" },
// ];

// const Projects = () => {
//   return (
//     <section className="projects">
//     <div className="projects-header">
//     <div className="projects-left">
//         <h5 className="projects-subtitle">MY PORTFOLIO</h5>
//         <div className="projects-title-container">
//             <h2 className="projects-title">Take A Look At My <br /> Recent Projects</h2>
//             <p className="projects-description">
//                 Welcome to my portfolio, where you can discover a selection of projects
//                 I’ve had the privilege to work on. Each project represents a unique challenge, 
//                 and I’ve delivered innovative solutions tailored to the clients’ needs.
//             </p>
//         </div>
//     </div>
// </div>

//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <div className="project-image-wrapper">
//               <img src={project.image} alt={project.title} />
//             </div>
//             <h3 className="project-title">{project.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
