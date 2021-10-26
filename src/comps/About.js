import classes from "./About.module.css";
import profilePic from '../linkedinpic.png';

const About = () => {
  return (
    <>
      <div className={classes.containerright}>
        <div id="home">
        <img className={classes.profilepic} src={profilePic} alt="" />
          {/* <h2 className={classes.fsttitle}>
            I am a web developer.
          </h2> */}
        </div>
        <div>
          <p className={classes.message}>
            Hi, I'm Sam; a front-end developer from France, currently based in
            Dallas, TX. Formerly a teacher, I fell in love with programing and
            decided to do a complete 180 to chase my newfound dream of becoming
            a web developer. I focus on building clean and user-friendly
            interfaces and I'm constantly learning web technologies and other
            development related topics. In my free time, I also enjoy travelling,
            hiking and baking.
          </p>
        </div>
        <div className={classes.line}/>
      </div>
    </>
  );
};

export default About;
