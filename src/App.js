import Header from "./components/Header";
import { useEffect } from "react";


function App() {
  let options = {
    // root: document.querySelector("#scrollArea"),
    rootMargin: "300px 0px -75px 0px",
    threshold: 0.4,
  };

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('fadeInAnim', entry.isIntersecting)
      })
    }, options);

    let elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <Header />
      <div className="info-container">
        <h1><span id="first">RASMUS</span><br/>MAKINIEMI</h1>
      </div>
      <div className="bio-container">
        <p className="bio hidden">
          I am a Computer Science teaching assistant and student at the <a target="_blank" href="https://www.cs.washington.edu/">
          University of Washington's Paul G. Allen School</a>. Currently pursuing
          my passion for web development, teaching, and environmental sustainability.
        </p>
      </div>
      {/* <div className="project-container">
        
      </div> */}
      <div className="project-container">
        <h2>PROJECTS</h2>
      </div>
    </>
  );
}

export default App;