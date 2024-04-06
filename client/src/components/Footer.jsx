

const Footer = () => {
  return (
    <footer>
    <div className="footerContainer">
      <div className="socialIcons">
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-google-plus"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#subjects">Subjects</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footerBottom">
      <p>
        Copyright &copy;2024: Designed and Developed by{" "}
        <span className="designer">Deepan & Balaji</span>
      </p>
    </div>
  </footer>
  )
}

export default Footer