import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./common/Preloader";
import { Link } from "react-router-dom";

const Header = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showMain, setShowMain] = useState(true);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const history = useLocation();

  useEffect(() => {
    if (history.pathname === "/") {
      setShowMain(true);
    } else {
      setShowMain(false);
    }
  }, [history, history.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 1000);
  }, [showPreloader]);

  const openSideMenu = () => {
    setShowMobileMenu(true);
  };

  const closeSideMenu = () => {
    setShowMobileMenu(false);
  };

  const handleSearchInput = (e) => {
    e.stopPropagation();
  };

  const openSearchBox = (e) => {
    e.stopPropagation();
    setShowSearchBox(true);
    document.getElementById("popup-search").focus();
  };

  const closeSearchBox = (e) => {
    e.stopPropagation();
    setShowSearchBox(false);
  };

  return (
    <div>
      {showMain ? (
        <div>
          <header className="header sticky-active">
            <div className="primary-header">
              <div className="container">
                <div className="primary-header-inner">
                  <div className="header-logo d-lg-block">
                    <Link reloadDocument to="/">
                      <img src="assets/img/logo/logo-dark.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="header-menu-wrap">
                    <div className="mobile-menu-items">
                      <ul>
                        <li className="active">
                          <Link reloadDocument to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link reloadDocument to="/about">
                            About Us
                          </Link>
                        </li>
                        <li className="">
                          <Link reloadDocument to="/services">
                            Services
                          </Link>
                        </li>

                        <li className="">
                          <Link reloadDocument to="/faq">
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="header-right">
                    <div
                      className="search-icon dl-search-icon"
                      onClick={openSearchBox}
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <Link
                      reloadDocument
                      to="/contact"
                      className="pb-primary-btn header-btn"
                    >
                      Get Started
                    </Link>
                    <div className="header-right-item">
                      <div
                        id="mobile-side-menu-toggle"
                        className="mobile-side-menu-toggle d-lg-none"
                        onClick={openSideMenu}
                      >
                        <i className="fa-sharp fa-solid fa-bars"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div
            id="popup-search-box"
            className={`${showSearchBox ? "toggled" : ""}`}
          >
            <div
              className="box-inner-wrap d-flex align-items-center"
              onClick={closeSearchBox}
            >
              <form id="form" action="#" method="get" role="search">
                <input
                  id="popup-search"
                  type="text"
                  name="s"
                  placeholder="Type keywords here..."
                  onClick={handleSearchInput}
                />
              </form>
              <div className="search-close">
                <i className="fa-sharp fa-regular fa-xmark"></i>
              </div>
            </div>
          </div>

          {showPreloader && <Preloader />}

          <div
            className={`mobile-side-menu ${showMobileMenu ? " is-open " : ""}`}
          >
            <div className="side-menu-content">
              <div className="side-menu-head">
                <Link reloadDocument to="/">
                  <img src="assets/img/logo/logo-dark.png" alt="logo" />
                </Link>
                <button
                  id="mobile-side-menu-close"
                  className="mobile-side-menu-close"
                  onClick={closeSideMenu}
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </div>
              <div className="side-menu-wrap mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal meanmenu-my-custom-className"
                  >
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul className="mean-nav-ul-my-custom-className">
                      <li>
                        <Link reloadDocument to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link reloadDocument to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link reloadDocument to="/services">
                          Services
                        </Link>
                      </li>
                      <li className="mean-last">
                        <Link reloadDocument to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="mean-last">
                        <Link reloadDocument to="/faq">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="contact-item item-2">
                <ul className="contact-list">
                  <li>
                    Address : <span>New Delhi, India</span>
                  </li>
                  <li>
                    Phone : <a href="tel:+918588040756">+91 8588 040 756</a>
                  </li>
                  <li>
                    Email :
                    <a href="mailto:team@saralofficial.com">
                      team@saralofficial.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="mobile-side-menu-overlay"
            className={`mobile-side-menu-overlay ${
              showMobileMenu ? " is-open " : ""
            }`}
            onClick={closeSideMenu}
          ></div>
        </div>
      ) : (
        <div>
          <header className="header header-2 header-5 sticky-active">
            <div className="primary-header">
              <div className="header-container">
                <div className="primary-header-inner inner-2">
                  <div className="header-logo d-lg-block">
                    <Link reloadDocument to="">
                      <img
                        className="light"
                        src="/assets/img/logo/logo-light.png"
                        alt="Logo"
                      />
                      <img
                        className="dark"
                        src="/assets/img/logo/logo-dark.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="header-menu-wrap">
                    <div className="mobile-menu-items">
                      <ul>
                        <li className="active">
                          <Link reloadDocument to="">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link reloadDocument to="/about">
                            About Us
                          </Link>
                        </li>
                        <li className="">
                          <Link reloadDocument to="/services">
                            Services
                          </Link>
                        </li>
                        <li className="">
                          <Link reloadDocument to="/faq">
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="header-right">
                    <Link
                      reloadDocument
                      to="/contact"
                      className="pb-primary-btn header-btn"
                    >
                      Contact<i className="fa-regular fa-arrow-right"></i>
                    </Link>
                    <div className="header-right-item">
                      <div
                        id="mobile-side-menu-toggle"
                        className="mobile-side-menu-toggle d-lg-none"
                        onClick={openSideMenu}
                      >
                        <i className="fa-sharp fa-solid fa-bars"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div
            id="popup-search-box"
            className={`${showSearchBox ? "toggled" : ""}`}
          >
            <div className="box-inner-wrap d-flex align-items-center">
              <form id="form" action="#" method="get" role="search">
                <input
                  id="popup-search"
                  type="text"
                  name="s"
                  placeholder="Type keywords here..."
                />
              </form>
              <div className="search-close">
                <i className="fa-sharp fa-regular fa-xmark"></i>
              </div>
            </div>
          </div>

          {showPreloader && <Preloader />}

          <div
            className={`mobile-side-menu ${showMobileMenu ? " is-open " : ""}`}
          >
            <div className="side-menu-content">
              <div className="side-menu-head">
                <Link reloadDocument to="">
                  <img src="/assets/img/logo/logo-dark.png" alt="logo" />
                </Link>
                <button
                  id="mobile-side-menu-close"
                  className="mobile-side-menu-close"
                  onClick={closeSideMenu}
                >
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </div>
              <div className="side-menu-wrap mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal meanmenu-my-custom-className"
                  >
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul className="mean-nav-ul-my-custom-className">
                      <li>
                        <Link reloadDocument to="">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link reloadDocument to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link reloadDocument to="/services">
                          Services
                        </Link>
                      </li>
                      <li className="mean-last">
                        <Link reloadDocument to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="mean-last">
                        <Link reloadDocument to="/faq">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="contact-item item-2">
                <ul className="contact-list">
                  <li>
                    Address : <span>New Delhi, India</span>
                  </li>
                  <li>
                    Phone : <a href="tel:+918588040756">+91 8588 040 756</a>
                  </li>
                  <li>
                    Email :
                    <a href="mailto:team@saralofficial.com">
                      team@saralofficial.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="mobile-side-menu-overlay"
            className={`mobile-side-menu-overlay ${
              showMobileMenu ? " is-open " : ""
            }`}
            onClick={closeSideMenu}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
