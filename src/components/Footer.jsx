import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Footer = () => {
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showModal = (e) => {
    e.preventDefault()
    setModalActive(true);
  };

  const closeModal = () => {
    navigate(location.pathname)
    setModalActive(false);
  };

  return (
    <>
      <footer className="footer-section bg-grey">
        <div
          className="footer-bg"
          data-background="assets/img/bg-img/footer-bg.png"
        ></div>
        <div className="container">
          <div className="row footer-wrap pt-120 pb-90">
            <div className="col-lg-5 col-md-6">
              <div className="footer-widget">
                <div className="site-logo">
                  <Link reloadDocument to="/">
                    <img src="assets/img/logo/logo-dark.png" alt="logo" />
                  </Link>
                </div>
                <div className="section-heading heading-2">
                  <h2 className="section-title">
                    Boost your business with <span>Saral</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-widget">
                <h3 className="widget-title">Get In Touch</h3>
                <p className="desc">
                  Join our newsletter to be updated about the latest marketing
                  wonders.
                </p>
                <div className="footer-form">
                  <form onSubmit={showModal} className="mt-subscribe-form">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      required={true}
                      placeholder="E-mail Here"
                    />
                    <input
                      type="hidden"
                      name="action"
                      value="mailchimpsubscribe"
                    />
                    <button className="submit">
                      <i className="fa-sharp fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li>
                    <a
                      href="https://www.facebook.com/ItsThatSaral/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/itsthatsaral/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h3 className="widget-title">Services</h3>
                <ul className="footer-list">
                  <li>
                    <Link reloadDocument to="/about">
                      <i className="fa-sharp fa-regular fa-chevron-right"></i>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link reloadDocument to="/services">
                      <i className="fa-sharp fa-regular fa-chevron-right"></i>
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link reloadDocument to="/contact">
                      <i className="fa-sharp fa-regular fa-chevron-right"></i>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link reloadDocument to="/faq">
                      <i className="fa-sharp fa-regular fa-chevron-right"></i>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-content">
              <p>
                Copyright © <span>Saral</span> 2024, All Rights Reserved.
              </p>
              <ul className="copy-list">
                <li>
                  <Link reloadDocument to="/contact">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link reloadDocument to="/contact">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link reloadDocument to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Modal show={modalActive} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter Subscribed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations on taking a step forward for your brand!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
