import ScrollUp from "../components/ScrollUp";
const Services = () => {
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
            <h1 className="title">Services</h1>
            <h4 className="sub-title">
              <a className="home" href="index">
                Home{" "}
              </a>
              <span></span>
              <a href="services" className="inner-page">
                {" "}
                Services
              </a>
            </h4>
          </div>
        </div>
      </section>

      <section className="service-section service-page pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center gy-4">
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
                    <a>Brand Building</a>
                  </h3>
                  <p>
                    We understand the importance of a strong brand identity. Our
                    branding services encompass logo design, brand guidelines,
                    and positioning strategies to create a cohesive and
                    memorable brand that resonates with your customers and
                    differentiates you from the competition. Building a
                    community around your brand is essential for long-term
                    success. We engage with your audience, respond to comments,
                    and foster meaningful conversations. By cultivating a loyal
                    fan base.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="400ms"
              >
                <div className="service-icon">
                  <img src="/assets/img/icon/project-2.png" alt="service" />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Social Media Management</a>
                  </h3>
                  <p>
                    Our expert team crafts data-driven social media strategies
                    tailored to your brand. We analyze your target audience,
                    competitors, and market trends to ensure your content
                    resonates with your audience, leading to increased
                    engagement and conversions. Compelling content is at the
                    core of any successful social media campaign. We produce
                    visually stunning graphics, engaging videos, and captivating
                    copywriting to convey your brand story effectively. Each
                    piece of content is meticulously curated to align with your
                    brand identity and goals.
                  </p>
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
                    src="/assets/img/icon/service-icon-3.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Creative Design</a>
                  </h3>
                  <p>
                    Our talented team of designers and copywriters collaborate
                    to produce captivating visuals, compelling copy, and
                    stunning designs that resonate with your target market. From
                    logo creation to print materials, we craft aesthetically
                    pleasing and persuasive assets that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="600ms"
              >
                <div className="service-icon">
                  <img src="/assets/img/icon/counter-4.png" alt="service" />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Media Planning</a>
                  </h3>
                  <p>
                    As media experts, we develop comprehensive strategies that
                    optimize your advertising budget and ensure your message
                    reaches the right audience through the most relevant
                    channels. We negotiate favorable media placements and
                    monitor campaigns closely to guarantee optimal performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item text-center wow fade-in-bottom"
                data-wow-delay="400ms"
              >
                <div className="service-icon">
                  <img
                    src="/assets/img/icon/service-icon-4.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Digital Advertising</a>
                  </h3>
                  <p>
                    We leverage the power of digital platforms to create
                    targeted and engaging campaigns that reach your ideal
                    audience. Our experts specialize in search engine marketing
                    (SEM), social media advertising, display advertising, and
                    email marketing, ensuring maximum impact and return on
                    investment.
                  </p>
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
                    src="/assets/img/icon/service-icon-5.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Marketing Analytics </a>
                  </h3>
                  <p>
                    We believe in the power of data. Our agency employs
                    cutting-edge analytics tools to track the performance of
                    your social media campaigns. Our data-driven approach allows
                    us to measure the effectiveness of your campaigns, identify
                    areas for improvement, and refine your advertising
                    strategies. We provide in-depth analytics reports and
                    actionable insights to ensure continuous growth and success.
                  </p>
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
                    src="/assets/img/icon/service-icon-6.png"
                    alt="service"
                  />
                </div>
                <div className="service-content">
                  <h3 className="title">
                    <a>Website Development</a>
                  </h3>
                  <p>
                    We understand that a website is one of the major places
                    where a brand identity is built in users' mind. It also
                    servers a single place where not only the users can know all
                    about the brand but also interact with the brand and try out
                    the products as they want. We provide web development
                    solutions that vary from wordpress landing pages, to one
                    pagers, shopify stores and many more to meet your needs.
                  </p>
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
                    <a>Search Engine Optimization</a>
                  </h3>
                  <p>
                    Our team has SEO experts who will help your website be on
                    the top search results organically. SEO is not just a
                    technique but also a practice that needs to be performed
                    regularly on the website as per the new trends and
                    requirements and we provide a holistic solution to provide
                    you with best results.
                  </p>
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

export default Services;
