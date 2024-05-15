import classes from "./About.module.css";
import profilePic from "../linkedinpic.png";

const About = () => {
  return (
    <>
      <div className={classes.containerright}>
        <div id="home">
          <h2 className={classes.title}>Experience</h2>
        </div>

        {/* <div id="home"> */}
        {/* <img className={classes.profilepic} src={profilePic} alt="" /> */}
        {/* </div> */}
        <div className={classes.resume}>
          <div className={classes.company}>
            <h3>
              {" "}
              <a
                className={classes.companyLink}
                href="https://www.bottlerocketstudios.com/"
                alt=""
              >
                Bottle Rocket{" "}
              </a>{" "}
            </h3>

            <p>Full-time, Dallas, TX, USA · Remote</p>
          </div>

          <ul className={classes.jobList}>
            <li className={classes.job}>
              <h5>Software Developer</h5>
              <p>Jun 2023 - Feb 2024 · 9 mos</p>
            </li>
            <li className={classes.job}>
              <h5>Associate Software Developer</h5>
              <p> Jan 2022 - May 2023 · 1 yr 5 mos</p>
            </li>
          </ul>
        </div>

        <div>
          <p className={classes.message}>
            With <span className={classes.impt}>over two years</span> of
            experience as a{" "}
            <span className={classes.impt}>front-end Software Developer</span>,
            I gained lots of hands-on experience at Bottle Rocket, where I
            worked under the{" "}
            <span className={classes.impt}>Agile {`${"(scrum)"}`}</span>{" "}
            methodology on a variety of projects with clients from diverse
            industries. These experiences have helped me develop a strong
            foundation in <span className={classes.impt}>ReactJS</span>,
            alongside other essential technologies such as{" "}
            <span className={classes.impt}>
              Redux, TypeScript, and various styling tools
            </span>
            . I had the opportunity to{" "}
            <span className={classes.impt}>
              design, develop and support web-based solutions, debug issues,
              participate in code reviews
            </span>
            , and more.
            <br />I have worked in fast paced environments with tight deadlines,
            in{" "}
            <span className={classes.impt}>
              collaboration with different teams
            </span>{" "}
            and I take pride in my ability to translate design concepts into
            user-friendly interfaces.
          </p>
        </div>
        <div className={classes.line} />
      </div>
    </>
  );
};

export default About;
