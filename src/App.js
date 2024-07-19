import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
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
        <ParallaxLayer offset={0} speed={0.1} className="info-container">
          <h1>
            <span id="first">RASMUS</span>
            <br />
            MAKINIEMI
          </h1>
          <p className="bio">
            I am a Computer Science teaching assistant and student at the{" "}
            <a target="_blank" href="https://www.cs.washington.edu/">
              University of Washington's Paul G. Allen School
            </a>
            . Currently pursuing my passion for web development, teaching, and
            environmental sustainability.
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.8} className="project-container">
          <section id="syntext-border">
            <article>
              <h2>SYNTEXT</h2>
              <p>
                Syntext is typing practice website made with programmers in
                mind! Through a collection of code snippets you can choose from,
                you can hone your syntax typing skills to increase efficiency
                and speed.
              </p>
              <article>
                <p>React.js</p>
                <p>•</p>
                <p>Node.js</p>
                <p>•</p>
                <p>Heroku</p>
              </article>
              <nav>
                <a href="https://github.com/hcp-uw/syntext">
                  <img
                  src={process.env.PUBLIC_URL + "/github.png"}
                  alt="github logo"/>
                </a>
                <a href="https://discord.gg/QTAzXCpnvs">
                  <img
                  src={process.env.PUBLIC_URL + "/discord.png"}
                  alt="discord logo"/>
                </a>
              </nav>
            </article>
            <div id="syntext-logo"></div>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
          <section id="m2-border">
            <div id="m2-logo"></div>
            <article>
              <h2>MEET TOGETHER</h2>
              <p>
                Inspired by When2meet, Meet Together employed a k-means
                algorithm to allow organizers divide participants into interest
                based clusterings. With this, you are able to use Google Forms
                to divide responses based on commonality.
              </p>
              <article>
                <p>React.js</p>
                <p>•</p>
                <p>Tailwind</p>
              </article>
              <nav>
                <a href="https://github.com/elimelt/meet-together">
                  <img
                  src={process.env.PUBLIC_URL + "/github.png"}
                  alt="github logo"/>
                </a>
                <a href="https://discord.gg/9jkFXg2kXR">
                  <img
                  src={process.env.PUBLIC_URL + "/discord.png"}
                  alt="discord logo"/>
                </a>
              </nav>
            </article>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
          <section id="botkram-border">
            <article>
              <h2>BOTKRAM</h2>
              <p>
                Botkram is a Discord bot developed for the Husky Coding Project that automated
                various tasks through slash commands such as verifying users with Google Forms,
                creating and setting up project teams through GitHub, and creating a support ticketing system.
              </p>
              <article>
                <p>Python</p>
                <p>•</p>
                <p>Discord.py</p>
              </article>
              <nav>
                <a href="https://github.com/hcp-uw/Botkram">
                  <img
                  src={process.env.PUBLIC_URL + "/github.png"}
                  alt="github logo"/>
                </a>
                <a href="https://discord.gg/QTAzXCpnvs">
                  <img
                  src={process.env.PUBLIC_URL + "/discord.png"}
                  alt="discord logo"/>
                </a>
              </nav>
            </article>
            <div id="botkram-logo"></div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} className="">
          <img src={process.env.PUBLIC_URL + "/rasmus.jpg"} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;