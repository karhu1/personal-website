import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";

const Testing = () => {
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
    console.log(elements)
    elements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer speed={0.2} className="info-container">
          <h1><span id="first">RASMUS</span><br/>MAKINIEMI</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3} className="info-container">
          <p className="bio hidden">
            I am a Computer Science teaching assistant and student at the <a target="_blank" href="https://www.cs.washington.edu/">
            University of Washington's Paul G. Allen School</a>. Currently pursuing
            my passion for web development, teaching, and environmental sustainability.
          </p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.8} className="project-container">
          <h2>I love web dev!!!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Testing;