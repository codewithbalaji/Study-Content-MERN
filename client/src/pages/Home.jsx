import "../css/style.css";
import "../css/styles.css";
import ab from "../assets/images/ab.jpg";
import main from "../assets/images/main.png";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import Subjects from "../Components/Subjects";
import Footer from "../Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <section id="home">
          <div className="tainer">
            <div className="ader">
              <div className="tent">
                <h1>
                  Welcome to
                  <br />
                  IT STUDY CONTENT
                </h1>
                <p style={{ color: "black" }}>
                  Are you a 2nd-year IT student diving into the complexities of
                  the forth semester? Look no further! IT STUDY CONTENT is your
                  one-stop destination for comprehensive study materials, notes,
                  and syllabus coverage tailored specifically for your academic
                  journey.
                </p>
                <a href="#subjects">
                  <button className="btns">Get Started</button>
                </a>
              </div>
              <div className="image">
                <span className="image__bg"></span>
                <img src={main} alt="header image" />
              </div>
            </div>
          </div>
        </section>
        <Subjects />
        <section id="about">
          <div className="about">
            <img src={ab} className="pic" />
            <div className="text">
              <h2>About ITSC</h2>
              <h5>
                <b>IT STUDY CONTENT</b>
              </h5>
              <p>
                Are you a 2nd-year IT student diving into the complexities of
                the forth semester? Look no further! IT STUDY CONTENT is your
                one-stop destination for comprehensive study materials, notes,
                and syllabus coverage tailored specifically for your academic
                journey. Whether you re grappling with advanced programming
                concepts, delving into database management intricacies, or
                exploring the depths of network security protocols, our curated
                resources are designed to support your learning every step of
                the way. From detailed lecture notes to hands-on lab exercises,
                we ve got you covered.
              </p>
              <p>
                <b>Understand the concept rather than memorizing it!</b>
              </p>
              <div className="data">
                <a href="#subjects" className="hire">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
