import classes from "./Contact.module.css";
import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <>
      <div className={classes.mainContainer} id="contact">
        <div>
          <h2 className={classes.title}>Get In Touch</h2>
        </div>
        <div className={classes.message}>
          <p>
            Want to collaborate, discuss projects or just say hi? Don't
            hesistate to send me an email!
          </p>
        </div>
        <div className={classes.contactContainer}>
          <div className={classes.emailIcons}>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:milne.samira@gmail.com">milne.samira@gmail.com</a>
            </p>
            <i className="fa fa-map-marker" />
            <p>
              Dallas, TX <br />
              <span className={classes.country}>United States</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
