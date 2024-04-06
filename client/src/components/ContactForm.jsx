import bg1 from "../assets/images/bg1.png";

const ContactForm = () => {
  return (
    <section id="contact">
    <div className="contact-form">
      <h1>Contact Us</h1>
      <div className="con">
        <div className="main">
          <div className="cont ">
            <h2>Contact Us</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="a1435ed6-8872-42fb-8da9-6293e2f3c8e0"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="name"
                placeholder="Enter Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={bg1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactForm