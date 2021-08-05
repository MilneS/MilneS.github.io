import classes from "./Contact.module.css";
import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
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
        </div>
        <div className={classes.contactContainer}>
          <form>
            <div className={classes.formstyle}>
              <div>
                <label htmlFor="name" />
                <input id="name" type="text" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="email" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" />
                <textarea
                  id="message"
                  type="text"
                  minLength="2"
                  placeholder="Your Message"
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
                <p>Dallas, TX <br/>
                United States</p>
                <i className="fa fa-envelope" />
                <p><a href="mailto:milne.samira@gmail.com">
                  milne.samira@gmail.com
                </a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
