import ScrollUp from "../components/ScrollUp";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section
        className="hero-section"
        data-background="/assets/img/bg-img/hero-bg.png"
        style={{
          backgroundImage: `url("/assets/img/bg-img/hero-bg.png")`,
        }}
      >
        <div className="hero-shapes">
          <div className="shape top-shape"></div>
          <div className="shape bottom-shape"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content md-pb-20">
                <h1
                  className="title tracking-in-expand wow fade-in-bottom"
                  data-wow-delay="300ms"
                >
                  <span className="shape-text">
                    Wanna build you brand?
                    <img
                      className="shape"
                      src="/assets/img/shapes/hero-text-shape.png"
                      alt="shape"
                    />
                  </span>
                  <span className="gradient-text">#ItsThatSaral</span>
                </h1>
                <Link
                  reloadDocument
                  to="/about"
                  className="pb-primary-btn primary-2 wow fade-in-bottom"
                  data-wow-delay="600ms"
                >
                  Learn More
                </Link>
                <div className="shapes">
                  <div className="round-shape">
                    <img src="/assets/img/shapes/hero-logo.png" alt="shape" />
                  </div>
                  <div className="star">
                    <img src="/assets/img/shapes/hero-star.png" alt="shape" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb text-center">
                <div className="shapes">
                  <div className="shape hero-shape-1">
                    <img
                      src="/assets/img/shapes/hero-shape-1.png"
                      alt="shape"
                    />
                  </div>
                  <div className="shape hero-shape-2">
                    <img
                      src="/assets/img/shapes/hero-img-shape-1.png"
                      alt="shape"
                    />
                  </div>
                  <div className="shape hero-shape-3">
                    <img
                      src="/assets/img/shapes/hero-img-shape-2.png"
                      alt="shape"
                    />
                  </div>
                </div>
                <div className="hero-counter">
                  <img src="/assets/img/icon/hero-user.png" alt="icon" />
                  <div className="counter-content">
                    <h3 className="title">
                      <span className="odometer" data-count="5000">
                        0
                      </span>
                      +
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <img src="/assets/img/images/hero-img-1.png" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section pt-120">
        <div className="container">
          <div className="row justify-content-center gy-lg-0 gy-4">
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="400ms"
              >
                <div className="service-icon">
                  <img
                    src="/assets/img/icon/service-icon-1.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <Link reloadDocument to="/services">
                      Brand Building
                    </Link>
                  </h3>
                  <p>
                    We understand the importance of a strong brand identity. Our
                    branding services encompass logo design, brand guidelines,
                    and positioning strategies to create a cohesive and
                    memorable brand.
                  </p>
                </div>
                <div className="service-btn">
                  <Link reloadDocument to="/services">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="500ms"
              >
                <div className="service-icon">
                  <img
                    src="/assets/img/icon/service-icon-2.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <Link reloadDocument to="/services">
                      Media Planning{" "}
                    </Link>
                  </h3>
                  <p>
                    As media experts, we develop comprehensive strategies that
                    optimize your advertising budget and ensure your message
                    reaches the right audience through the most relevant
                    channels.
                  </p>
                </div>
                <div className="service-btn">
                  <Link reloadDocument to="/services">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="600ms"
              >
                <div className="service-icon">
                  <img
                    src="/assets/img/icon/service-icon-3.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <Link reloadDocument to="/services">
                      Social Media Management
                    </Link>
                  </h3>
                  <p>
                    Our expert team crafts data-driven social media strategies
                    tailored to your brand. We analyze your target audience,
                    competitors, and market trends to ensure your content
                    resonates with your audience.
                  </p>
                </div>
                <div className="service-btn">
                  <Link reloadDocument to="/services">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pt-100 pb-120">
        <div className="container">
          <div className="row align-items-center gy-lg-0 gy-4">
            <div className="col-lg-6">
              <div
                className="about-img wow fade-in-left"
                data-wow-delay="400ms"
              >
                <div
                  className="shape"
                  data-background="/assets/img/shapes/about-shape.png"
                ></div>
                <img
                  className="img"
                  src="/assets/img/images/about-img-1.png"
                  alt="about"
                />
                <div className="about-counter">
                  <div className="counter-icon">
                    <div className="icon">
                      <img src="/assets/img/icon/about-icon.png" alt="icon" />
                    </div>
                    <h3 className="title">
                      <span className="odometer" data-count="10">
                        0
                      </span>
                      +
                    </h3>
                  </div>
                  <p>Years Of Experiences</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="shape wow fade-in-right" data-wow-delay="400ms">
                  <img src="/assets/img/shapes/about-shape-2.png" alt="shape" />
                </div>
                <div className="section-heading heading-2">
                  <h4
                    className="sub-heading wow fade-in-right"
                    data-wow-delay="300ms"
                  >
                    About Us
                  </h4>
                  <h2
                    className="section-title wow fade-in-right"
                    data-wow-delay="400ms"
                  >
                    Dominate the <span>Digital</span> Landscape
                  </h2>
                  <p className="wow fade-in-right" data-wow-delay="500ms">
                    Saral helps you brand build a digital persona that will make
                    your brand stand out and connect with your audience on a
                    personal level.
                  </p>
                </div>
                <ul
                  className="about-list wow fade-in-right"
                  data-wow-delay="600ms"
                >
                  <li>
                    <i className="fa-regular fa-chevrons-right"></i>Build Brand
                  </li>
                  <li>
                    <i className="fa-regular fa-chevrons-right"></i>
                    Identification and Communication with Market
                  </li>
                  <li>
                    <i className="fa-regular fa-chevrons-right"></i>Digital
                    Planning and Market Analysis
                  </li>
                </ul>
                <Link
                  reloadDocument
                  to="/about"
                  className="pb-primary-btn wow fade-in-right"
                  data-wow-delay="700ms"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill-section pb-120">
        <div className="container">
          <div className="row skill-wrap gy-lg-0 gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="skill-content">
                <div className="section-heading heading-2">
                  <h4
                    className="sub-heading wow fade-in-left"
                    data-wow-delay="300ms"
                  >
                    What We Do
                  </h4>
                  <h2
                    className="section-title wow fade-in-left"
                    data-wow-delay="400ms"
                  >
                    We help Brands build and grow their
                    <span>&nbsp;Digital&nbsp;</span>presence.
                  </h2>
                  <p className="wow fade-in-left" data-wow-delay="500ms">
                    We live in a world that’s constantly evolving and with the
                    advent of social and technological avenues.&nbsp;
                    <span className="SARAL_TEXT-my-custom-class">Saral </span>
                    works towards making your everyday business hassles a bit
                    easy so you take care of your business goals and we will
                    take care of the creativity and technology that shapes your
                    dream into a beautiful reality!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="skill-img wow fade-in-right"
                data-wow-delay="500ms"
              >
                <img src="/assets/img/images/skill-img-1.png" alt="skill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section pt-120 pb-120 bg-grey">
        <div className="bg-color"></div>
        <div className="shapes">
          <div className="shape shape-1">
            <img src="/assets/img/shapes/project-shape-1.png" alt="project" />
          </div>
          <div className="shape shape-2">
            <img src="/assets/img/shapes/project-shape-2.png" alt="project" />
          </div>
        </div>
        <div className="container">
          <div className="section-heading text-center">
            <h4
              className="sub-heading wow fade-in-bottom"
              data-wow-delay="300ms"
            >
              Our Projects
            </h4>
            <h2
              className="section-title wow fade-in-bottom"
              data-wow-delay="400ms"
            >
              Optimizing Brands for Online <span>Success</span>
            </h2>
          </div>
          <div className="project-filter">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-filter-list text-center">
                  <div className="filter-item active" data-filter="*">
                    Search Engine
                  </div>
                  <div className="filter-item" data-filter=".authority ">
                    Real Authority Method
                  </div>
                  <div className="filter-item" data-filter=".content">
                    Content Creation
                  </div>
                </div>
              </div>
            </div>
            <div className="row filter-items justify-content-center gy-lg-0 gy-4">
              <div className="col-lg-4 col-md-6 single-item authority content">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link>
                      <img
                        src="/assets/img/project/project-1.jpg"
                        alt="project"
                      />
                    </Link>
                    <div className="project-content">
                      <h3 className="title">
                        <Link>Brand design</Link>
                      </h3>
                      <p>
                        We help businesses establish their Brand and Brand
                        Identity and build launch campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 single-item authority">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link>
                      <img
                        src="/assets/img/project/project-2.jpg"
                        alt="project"
                      />
                    </Link>
                    <div className="project-content">
                      <h3 className="title">
                        <Link>E-commerce Solutions</Link>
                      </h3>
                      <p>
                        We build e-com websites, shopify and woo-commerce store
                        for the brands that want to sell products online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 single-item content">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link>
                      <img
                        src="/assets/img/project/project-3.jpg"
                        alt="project"
                      />
                    </Link>
                    <div className="project-content">
                      <h3 className="title">
                        <Link>Digital Marketing</Link>
                      </h3>
                      <p>
                        We build digital marketing campaigns and work on SEO for
                        the brands to reach their customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="request-section bg-grey pt-120 pb-120">
        <div className="bg-color"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="request-content wow fade-in-left"
                data-wow-delay="400ms"
              >
                <div className="shape">
                  <img src="/assets/img/shapes/request-shape.png" alt="shape" />
                </div>
                <div className="section-heading heading-2">
                  <h4 className="sub-heading">Contact Us</h4>
                  <h2 className="section-title">
                    Make your&nbsp;<span>Brand</span>&nbsp;stand out in&nbsp;
                    <span>Digital</span>&nbsp; Presence
                  </h2>
                  <p>
                    Reach out to us to build your brand and social presence.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="request-img text-center wow fade-in-right"
                data-wow-delay="300ms"
              >
                <img src="/assets/img/images/request-img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollUp />
    </div>
  );
};

export default Home;
