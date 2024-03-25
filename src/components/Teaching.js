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
              <h2>TIPS FOR 154</h2>
              <p>
                <ul>
                  <li>
                    Practice debugging! The inspector tools and console logs are
                    your friend, there can never be too many (before submitting
                    of course)!
                  </li>
                  <li>
                    Scope out your workload. Some assignments take an hour,
                    while others take multiple days. Something simple like
                    scrolling the spec will go a long way.
                  </li>
                  <li>
                    Ed board. The Ed board is a magical place, and is a great
                    way to ask for advice if you are stuck! :]
                  </li>
                </ul>
              </p>
            </article>
            <div id="syntext-logo"></div>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
          <section id="m2-border">
            <div id="m2-logo"></div>
            <article>
              <h2>VSCode Extensions</h2>
              <p>
                Here I have compiled some extensions that I have found helpful
                during coding, so I highly recommend checking them out!!
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                    >
                      Live Server
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser"
                    >
                      open in browser
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                    >
                      Auto Rename Tag
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"
                    >
                      Thunder Client
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets"
                    >
                      VSCode Pets
                    </a>{" "}
                    (the best one)
                  </li>
                </ul>
              </p>
            </article>
            {/* <img src={process.env.PUBLIC_URL + "/syntext.png"} alt="syntext logo"/> */}
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8} className="">
          <p>
            this website is a work in progress for my future portfolio site that
            i just slightly modified for 154, so i hope you enjoyed :D the
            pictures are from my hikes and the one below is me playing!!
            <br/><br/>
            this site is NOT laptop friendly atm, so use your phone or computer!
          </p>
          <img src={process.env.PUBLIC_URL + "/rasmus.jpg"} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Testing;
