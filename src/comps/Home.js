import classes from "./Home.module.css";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <>
      <div className={classes.containerleft}>
        <div className={classes.bonjour}>
          <p className={classes.bonjourp}>
            Hello! <span className={classes.sam}>I'm Samira Milne</span>.<br />
            I'm a front-end web developer.
          </p>
        </div>
        <section className={classes.lefticons}>
          <div>
            <a href="https://www.linkedin.com/in/samiramilne">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/MilneS">
              <i className="fa fa-github" />
            </a>
            <a href="mailto:milne.samira@gmail.com">
              <i className="fa fa-envelope-o" />
            </a>
          </div>
          <div className={classes.name}>© Samira Milne | 2024</div>
        </section>
      </div>
    </>
  );
};

export default Home;
