import classes from "./Contact.module.css";
import "font-awesome/css/font-awesome.min.css";
import { send } from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      toSend,
      process.env.REACT_APP_USER
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShowMessage(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({ from_name: "", reply_to: "", message: "" });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={classes.containerright}>
        <div>
          <h2 className={classes.title} id="contact">
            Get In Touch
          </h2>
        </div>
        <div className={classes.message}>
          <p>
            Want to collaborate, discuss projects or just say hi? Don't
            hesistate to send me a message!
          </p>
          <div className={classes.sentcontainer}>
            {showMessage && 
            <p>Your message was sent!</p>
            }
          </div>
        </div>
        <div className={classes.contactContainer}>
          <form onSubmit={onSubmit}>
            <div className={classes.formstyle}>
              <div>
                <label htmlFor="name" />
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" />
                <input
                  id="email"
                  type="email"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" />
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                  minLength="2"
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit">Send message</button>
            </div>
          </form>

          <div className={classes.emailIcons}>
            <i className="fa fa-map-marker" />
            <p>
              Dallas, TX <br />
              <span className={classes.country}>United States</span>
            </p>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:milne.samira@gmail.com">milne.samira@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
