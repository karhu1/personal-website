import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <div className="info">
        <h1><span id="first">RASMUS</span><br/>MAKINIEMI</h1>
      </div>
      <div className="info">
        <p className="bio">
          I am a Computer Science teaching assistant and student at the <a target="_blank" href="https://www.cs.washington.edu/">
          University of Washignton's Paul G. Allen School</a>. Currently pursuing
          my passion for web development, teaching, and environmental sustainability.
        </p>
      </div>
    </>
  );
}

export default App;