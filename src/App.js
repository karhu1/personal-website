import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        console.log('entry: ')
        console.log(entry)
        entry.target.classList.toggle('show', entry.isIntersecting)
      })
    }, options);

    let elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el))
  }, [])

  AOS.init();

  return (
    <>
      <Header />
      <div className="info">
        <h1><span id="first">RASMUS</span><br/>MAKINIEMI</h1>
      </div>
      <div className="info">
        <p className="bio hidden">
          I am a Computer Science teaching assistant and student at the <a target="_blank" href="https://www.cs.washington.edu/">
          University of Washignton's Paul G. Allen School</a>. Currently pursuing
          my passion for web development, teaching, and environmental sustainability.
        </p>
      </div>
      <div className="hidden"></div>
    </>
  );
}

export default App;