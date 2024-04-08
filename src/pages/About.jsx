import ScrollUp from "../components/ScrollUp";
const About = () => {
  return (
    <div>
      <section
        className="page-header"
        data-background="/assets/img/bg-img/page-header-bg.jpg"
        style={{
          backgroundImage: `url("/assets/img/bg-img/page-header-bg.jpg")`,
        }}
      >
        <div className="container">
          <div className="page-header-content">
            <h1 className="title">About Us</h1>
            <h4 className="sub-title">
              <a className="home" href="index">
                Home{" "}
              </a>
              <span></span>
              <a href="about" className="inner-page">
                {" "}
                About Us
              </a>
            </h4>
          </div>
        </div>
      </section>

      <div className="about-section-2 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-img-wrap wow slide-in-left"
                data-wow-delay="300ms"
              >
                <div className="about-img-item">
                  <div className="shape">
                    <img
                      src="/assets/img/shapes/about-item-shape.png"
                      alt="about"
                    />
                  </div>
                  <div className="about-counter">
                    <div className="icon">
                      <img src="/assets/img/icon/about-icon-2.png" alt="icon" />
                    </div>
                    <div className="counter-content">
                      <h3 className="title">
                        <span className="odometer" data-count="4">
                          0
                        </span>
                        K+
                      </h3>
                      <p>Happy Customer</p>
                    </div>
                  </div>
                </div>
                <div className="about-img-item">
                  <div className="item-img">
                    <div className="bg-shape top"></div>
                    <img
                      src="/assets/img/images/about-item-img-1.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="about-img-item">
                  <div className="item-img">
                    <div className="bg-shape bottom"></div>
                    <img
                      src="/assets/img/images/about-item-img-2.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="about-img-item chart">
                  <div className="item-chart-wrap">
                    <div className="item-chart">
                      <div
                        className="piechart"
                        data-bar-color="#2f4d01"
                        data-percent="65"
                      >
                        <span>65</span>%
                      </div>
                      <div className="item-content">
                        <h3 className="title">Daily Activity</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-2">
                <div className="section-heading heading-3">
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
                    Enhance Your Brand's Digital <span>Performance</span>
                  </h2>
                  <p className="wow fade-in-right" data-wow-delay="500ms">
                    We help your brand reach masses with our expertise in brand
                    building and digital marketing. You work on the brand and
                    let us worry about your digital presence.
                  </p>
                </div>
                <div
                  className="about-box-wrap wow fade-in-right"
                  data-wow-delay="600ms"
                >
                  <div className="about-box">
                    <h3 className="title">
                      <i className="fa-regular fa-chevrons-right"></i>Brand
                      Building
                    </h3>
                    <p>
                      Make a mark within your audience and make your brand stand
                      out.
                    </p>
                  </div>
                  <div className="about-box">
                    <h3 className="title">
                      <i className="fa-regular fa-chevrons-right"></i>Social
                      Media Management
                    </h3>
                    <p>
                      Build a social community of people who resonate with your
                      brand.
                    </p>
                  </div>
                </div>
                <a
                  href="services"
                  className="pb-primary-btn primary-3 wow fade-in-right"
                  data-wow-delay="700ms"
                >
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pricing-section pb-120 overflow-hidden">
        <div className="container">
          <div className="section-heading text-center">
            <h2
              className="section-title wow fade-in-bottom"
              data-wow-delay="400ms"
            >
              What is <span>Saral</span>?
            </h2>
          </div>

          <div className="section-heading text-center">
            <h3 className="about-section-body" data-wow-delay="400ms">
              We live in a world that’s constantly evolving and with the advent
              of social and technological avenues, it does become a bit
              difficult for us to keep up with the pace hence we all look
              forward to something simple and easy and as they say in Hindi,
              Saral. That's why we at Saral are constantly working towards
              making your everyday business hassles a bit easy with our support!
              You take care of your business goals and we will take care of the
              creativity and technology that shapes your dream into a beautiful
              reality! Together, let’s make it less complicated and a bit easy;
              let’s step into the world of Saral.
              <span> Afterall, it's that Saral.. :)</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="counter-section">
        <div className="bg-color"></div>
        <div className="container">
          <div className="row counter-wrap wrap-2 gy-lg-0 gy-4">
            <div className="gradient-border"></div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <div className="counter-content">
                  <h3 className="title">
                    <span className="odometer" data-count="200">
                      0
                    </span>
                    <span className="text">+</span>
                  </h3>
                  <p>Team member</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item .about-counter-item-my-custom-class">
                <div className="counter-content">
                  <h3 className="title">
                    <span className="odometer" data-count="30">
                      0
                    </span>
                    <span className="text">k+</span>
                  </h3>
                  <p>Winning award</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item about-counter-item-2-my-custom-class">
                <div className="counter-content">
                  <h3 className="title">
                    <span className="odometer" data-count="20">
                      0
                    </span>
                    <span className="text">+</span>
                  </h3>
                  <p>Complete project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item about-counter-item-2-my-custom-class">
                <div className="counter-content">
                  <h3 className="title">
                    <span className="odometer" data-count="300">
                      0
                    </span>
                    <span className="text">+</span>
                  </h3>
                  <p>Client review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section-2 bg-grey overflow-hidden pt-120 pb-120">
        <div className="container">
          <div className="section-heading sub-heading-color heading-3 text-center">
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
              Seize the Digital Opportunity <span>Online Strategy</span>
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="project-img-wrap">
                <img src="/assets/img/images/project-img-1.png" alt="project" />
                <div className="project-counter">
                  <h3 className="title">
                    <span className="odometer" data-count="10">
                      0
                    </span>
                    <span className="text">+</span>
                  </h3>
                  <p>years of experiences</p>
                </div>
                <div className="project-counter-2">
                  <div className="icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <span className="odometer" data-count="5000">
                        0
                      </span>
                      <span className="text">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-list-wrap">
                <div className="shape">
                  <img
                    src="/assets/img/shapes/project-item-shape.png"
                    alt="shape"
                  />
                </div>
                <ul className="project-list">
                  <li>
                    <div className="list-icon">
                      <img src="/assets/img/icon/project-1.png" alt="icon" />
                    </div>
                    <h3 className="title">
                      <a href="services">Brand Building</a>
                    </h3>
                  </li>
                  <li>
                    <div className="list-icon">
                      <img src="/assets/img/icon/project-2.png" alt="icon" />
                    </div>
                    <h3 className="title">
                      <a href="services">Media Planning</a>
                    </h3>
                  </li>
                  <li>
                    <div className="list-icon">
                      <img src="/assets/img/icon/project-3.png" alt="icon" />
                    </div>
                    <h3 className="title">
                      <a href="services">Social Media Management</a>
                    </h3>
                  </li>
                  <li>
                    <div className="list-icon">
                      <img src="/assets/img/icon/project-4.png" alt="icon" />
                    </div>
                    <h3 className="title">
                      <a href="services">Creative Design</a>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testi-info md-pb-40">
                <div className="align-items-center d-flex flex-column heading-2 section-heading">
                  <h2
                    className="section-title wow fade-in-bottom d-flex justify-content-center"
                    data-wow-delay="400ms"
                  >
                    Meet the&nbsp;
                    <span>Founders</span>
                  </h2>
                  <p className="wow fade-in-bottom" data-wow-delay="500ms">
                    We helped our clients building their brand from scratch and
                    build their social presence in a way that relates with their
                    audience and connect with the like minded individuals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-items">
                    <div
                      className="testi-item wow fade-in-bottom"
                      data-wow-delay="400ms"
                    >
                      <a
                        href="https://www.linkedin.com/in/anchal-gaur-a907ab169/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="client-thumb">
                          <img
                            src="/assets/img/founders/anchal.jpeg"
                            alt="Anchal"
                            className="founder-image-my-custom-class"
                          />
                        </div>
                        <img
                          className="quote"
                          src="/assets/img/shapes/quote.png"
                          alt="quote"
                        />
                        <div className="testi-content">
                          <h3 className="name">
                            Anchal Gaur<span></span>
                          </h3>
                          <ul className="review"></ul>
                          <p>
                            Anchal has been working as a Social Media Strategist
                            and Brand Manager at the agency side for almost half
                            a decade. With a diverse skillset from management,
                            execution and analytics, she has a knack for weaving
                            stories for brand she works on.
                          </p>
                          <p>
                            She believes that people don't buy things, they buy
                            stories and experiences, that is why she loves
                            helping brands make narratives that are unique in
                            their own ways while ensuring that people make your
                            brand, their own. With&nbsp;
                            <span className="SARAL_TEXT-my-custom-class">
                              Saral
                            </span>
                            &nbsp; , she wants to make it simple for both
                            businesses and people to be able to communicate
                            their goals with a tinch of creativity.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-items">
                    <div
                      className="testi-item wow fade-in-bottom"
                      data-wow-delay="400ms"
                    >
                      <a
                        href="https://www.linkedin.com/in/suraj-singla-9a4343142/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="client-thumb">
                          <img
                            src="/assets/img/founders/suraj.jpeg"
                            alt="Suraj"
                            className="founder-image-my-custom-class"
                          />
                        </div>
                        <img
                          className="quote"
                          src="/assets/img/shapes/quote.png"
                          alt="quote"
                        />
                        <div className="testi-content">
                          <h3 className="name">
                            Suraj Singla<span></span>
                          </h3>
                          <ul className="review"></ul>
                          <p>
                            Suraj has been working as an advisor and consultant
                            for international clients in tech world and helping
                            them with solutions that are not only best suited
                            for their business but also helping them target the
                            appropriate market for the product.
                          </p>
                          <p>
                            He believes that technology is built for everyone
                            and every business should have means to utilize that
                            technology for their benefit and with&nbsp;
                            <span className="SARAL_TEXT-my-custom-class">
                              Saral
                            </span>
                            &nbsp; he is working towards that same goal and
                            bridging the gaps between the tech and media
                            industry.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollUp />
    </div>
  );
};

export default About;
