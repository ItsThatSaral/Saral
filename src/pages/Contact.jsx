import ScrollUp from "../components/ScrollUp";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section
        className="page-header"
        data-background="/assets/img/bg-img/page-header-bg.jpg"
        style={{
          backgroundImage: "/assets/img/bg-img/page-header-bg.jpg",
        }}
      >
        <div className="container">
          <div className="page-header-content">
            <h1 className="title">Contact</h1>
            <h4 className="sub-title">
              <Link reloadDocument className="home" to="/">
                Home{" "}
              </Link>
              <span></span>
              <a href="contact" className="inner-page">
                {" "}
                Contact
              </a>
            </h4>
          </div>
        </div>
      </section>

      <section className="contact-section bg-grey pt-120 pb-120">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-6">
              <div className="contact-content">
                <h2 className="title">Get In Touch</h2>
                <p>
                  Want to give us a chance at helping you build the brand of
                  your dreams? Worry not, because&nbsp;
                  <span className="gradient-text">#ItsThatSaral!</span>
                  &nbsp;With an exclusively tailored strategy for your brand
                  based on your need and vision, we would love to be your brand
                  custodians and help you reach the right audiences with data
                  driven approach while staying true to the essence of your
                  dream. Shoot us an email or drop in your information below and
                  we shall reach out to you.
                </p>
                <div className="contact-box">
                  <ul className="contact-list">
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:+918588040756">(+91) 8588 040 756</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:team@saralofficial.com">
                        team@saralofficial.com
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-clock"></i>
                      <span>Mon-Sun : 10AM-7PM</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>New Delhi, India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-wrapper">
        <iframe
          title="map-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.930026987462!2d77.2177783755519!3d28.631859184111185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0a0025699b%3A0xcaaf49a31d7e510f!2sCannaught%20palace!5e0!3m2!1sen!2sin!4v1712130209395!5m2!1sen!2sin"
          width="100%"
          height="600"
          frameBorder="0"
          className="contact-iframe-border-0"
          allowFullScreen=""
        ></iframe>
      </div>

      <ScrollUp />
    </div>
  );
};

export default Contact;
