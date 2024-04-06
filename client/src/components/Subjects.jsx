import ca from "../assets/images/ca.jpg";
import daa from "../assets/images/daa.png";
import dalab from "../assets/images/dalab.png";
import dblab from "../assets/images/dblab.jpg";
import dbms from "../assets/images/dbms.png";
import mpmc from "../assets/images/mpmc.jpg";
import pas from "../assets/images/pas.jpg";
import uhv from "../assets/images/uhv.jpg";

const Subjects = () => {
  return (
    <section id="subjects">
    <div className="sub">
      <h1 className="heading">Subjects</h1>
      <div className="box-container">
        <div className="box">
          <img src={dbms} alt="" />
          <h3>DBMS</h3>
          <p>Database Management System</p>
          <a href="/dbms" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={daa} alt="" />
          <h3>DAA</h3>
          <p>Design & Analysis of Algorithms</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={ca} alt="" />
          <h3>CA</h3>
          <p>Computer Architecture</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={mpmc} alt="" />
          <h3>MPMC</h3>
          <p>Microprocessor & Microcontroller</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={pas} alt="" />
          <h3>PAS</h3>
          <p>Probability & Statistics</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={uhv} alt="" />
          <h3>UHV</h3>
          <p>Universal Human Values</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={dblab} alt="" />
          <h3>DBMS LAB</h3>
          <p>Database Management System Laboratory</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <img src={dalab} alt="" />
          <h3>DAA LAB</h3>
          <p>Design & Analysis of Algorithms Laboratory</p>
          <a href="/sorry" className="btn">
            read more
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Subjects