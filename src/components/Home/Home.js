import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./Home.css";
import Button from "../../components/Button/Button";
import { Link } from "react-scroll";

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/home-content") 
      .then((response) => {
        setHomeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching home data:", error);
      });
  }, []);

  if (!homeData) return <p>Loading...</p>; 

  return (
    <section className="home-container">
      <div className="text-section">
        <p className="subtitle">{homeData.title}</p>
        <h1 className="title">Hello! I'm <br /> {homeData.name}</h1>
        <p className="description">{homeData.description}</p>
        <div className="buttons">
          <Button text="GET QOUTE NOW" to="contact" />
          <button className="call-btn">
            <Link to="bookingpage" smooth={true} duration={500}>
              BOOK A CALL 📞
            </Link>
          </button>
        </div>
      </div>
      <div className="image-section">
        <div className="circle">
          <img src={homeData.profilePic} alt="Profile" className="profile-pic" />
        </div>
      </div>
      <div className="expertise-section">
        <div className="expertise-content">
          <div className="expertise-box">
            <h3>My Expertise</h3>
            <p>Skills That Drive Success</p>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>{homeData.experience} <span>+</span></h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h2>{homeData.projectsCompleted} <span>+</span></h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h2>{homeData.satisfactionRate} <span>%</span></h2>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;







// import React , {useState}from "react";
// import "./Home.css";
// import profilePic from "../../assets/profile_picture.jpg"; 
// import Button from "../../components/Button/Button";
// import { Link } from "react-scroll";

// const Home = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const closeMenu = () => setMenuOpen(false); 
//   return (
//     <section className="home-container">
//       <div className="text-section">
//         <p className="subtitle">Associate Software Engineer & Web App Developer</p>
//         <h1 className="title">Hello! I'm <br /> Mohammad Hasnat</h1>
//         <p className="description">
//         Unlocking the Full Potential of the Web. As an Associate Software Engineer and Web App Developer,
//         I specialize in building scalable, efficient, and user-friendly applications. With expertise in Django,
//         React, and Node.js, I am dedicated to transforming ideas into powerful digital solutions. Let’s build 
//         something amazing together!.
//         </p>
//         <div className="buttons">
//           <Button text="GET QOUTE NOW" to="contact" />
//           <button className="call-btn">
//             <Link to="bookingpage" smooth={true} duration={500} onClick={closeMenu}>
//             BOOK A CALL 📞</Link>
//           </button>
//         </div>
//       </div>
//       <div className="image-section">
//         <div className="circle">
//           <img src={profilePic} alt="Profile" className="profile-pic" />
//         </div>
//       </div>
//       <div className="expertise-section">
//         <div className="expertise-content">
//             <div className="expertise-box">
//                 <h3>My Expertise</h3>
//                 <p>Skills That Drive Success</p>
//             </div>
//             <div className="stats">
//                 <div className="stat">
//                     <h2>1 <span>+</span></h2>
//                     <p>Years of Experience</p>
//                 </div>
//                 <div className="stat">
//                     <h2>10<span>+</span></h2>
//                     <p>Projects Completed</p>
//                 </div>
//                 <div className="stat">
//                     <h2>80<span>%</span></h2>
//                     <p>Satisfaction Rate</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </section>
//   );
// };

// export default Home;
