import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e, key) => {
    setForm({
      ...form,
      [`${key}`]: e.target.value,
    });
  };

  return (
    <>
      <div className="request-form">
        <form
          className="form-horizontal"
          action={`mailto:team@saralofficial.com?body=${form.message}&subject=Name: ${form.name} | Phone: ${form.phone} | Subject: ${form.subject}`}
          method="POST"
          encType="text/plain"
        >
          <div className="form-group row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required="true"
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                required="true"
                onChange={(e) => handleChange(e, "phone")}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required="true"
                onChange={(e) => handleChange(e, "subject")}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <textarea
                id="message"
                name="Message"
                cols="30"
                rows="5"
                className="form-control address"
                placeholder="Message"
                required="true"
                onChange={(e) => handleChange(e, "message")}
              ></textarea>
            </div>
          </div>
          <div className="submit-btn text-center">
            <button id="submit" className="pb-primary-btn" type="submit">
              Send a message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
