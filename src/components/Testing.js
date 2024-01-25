import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useEffect } from "react";

const Testing = () => {
  // let options = {
  //   // root: document.querySelector("#scrollArea"),
  //   rootMargin: "300px 0px -75px 0px",
  //   threshold: 0.4,
  // };

  // useEffect(() => {
  //   let observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle('fadeInAnim', entry.isIntersecting)
  //     })
  //   }, options);

  //   let elements = document.querySelectorAll(".hidden");
  //   console.log(elements)
  //   elements.forEach((el) => observer.observe(el))
  // }, [])

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.2} className="info-container">
          <h1><span id="first">RASMUS</span><br/>MAKINIEMI</h1>
          <p className="bio">
            I am a Computer Science teaching assistant and student at the <a target="_blank" href="https://www.cs.washington.edu/">
            University of Washington's Paul G. Allen School</a>. Currently pursuing
            my passion for web development, teaching, and environmental sustainability.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.8} className="project-container">
          <section>
            <article>
              <h2>SYNTEXT</h2>
              <p>
                Syntext is typing practice website made with programmers in mind!
                Through a collection of code snippets you can choose from, you can
                hone your syntax typing skills to increase efficiency and speed.
              </p>
              <article>
                <p>React.js</p>
                <p>•</p>
                <p>Node.js</p>
                <p>•</p>
                <p>Heroku</p>
              </article>
              <nav>
                <img src={process.env.PUBLIC_URL + "/github.png"} alt="github logo"/>
                <img src={process.env.PUBLIC_URL + "/discord.png"} alt="discord logo"/>
              </nav>
            </article>
            <div id="syntext-logo"></div>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
          <section>
            <div id="m2-logo"></div>
            <article>
              <h2>MEET TOGETHER</h2>
              <p>
                Inspired by When2meet, Meet Together employed a k-means algorithm
                to allow organizers divide participants into interest based clusterings.
                With this, you are able to use Google Forms to divide responses based on
                commonality.
              </p>
              <article>
                <p>React.js</p>
                <p>•</p>
                <p>Tailwind</p>
                <p>•</p>
                <p>Google Forms API</p>
              </article>
              <nav>
                <img src={process.env.PUBLIC_URL + "/github.png"} alt="github logo"/>
                <img src={process.env.PUBLIC_URL + "/discord.png"} alt="discord logo"/>
              </nav>
            </article>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} className="">
          <img src={process.env.PUBLIC_URL + "/rasmus.jpg"}/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Testing;