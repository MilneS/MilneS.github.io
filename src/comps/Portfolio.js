import classes from "./Portfolio.module.css";
import ProjectsData from "./Projectsdata";

const Portfolio = () => {
  return (
    <div className={classes.containerright} id="portfolio">
      <div>
        <h2 className={classes.title}>Projects</h2>
      </div>
      <div>
        <ul className={classes.projectscontainer}>
          {ProjectsData.map((item) => (
            <li key={item.id}> 
              <div className={classes.imgcontainer}>
              {item.title === "CampGrounds" && (
                <p className={classes.maintenance}> /!\ UNDER MAINTENANCE /!\</p>
              )}
                <img className={classes.imgs} src={item.pic} alt="" />
                <a href={item.link}>
                  <div className={classes.after}>
                    <p className={classes.view}>View</p>
                  </div>
                </a>
              </div>
              <div className={classes.titlecl}>
                <div className={classes.cardIcons}>
                  <div className={classes.ibar}>
                    <a href={item.ghLink}>
                      <i className="fa fa-github" />
                    </a>
                    <a href={item.link}>{item.title}</a>
                  </div>
                  <p className={classes.descr}>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="https://github.com/MilneS">
          <button id="bouton">Full Portfolio</button>
        </a>
      </div>
      <div className={classes.line} />
    </div>
  );
};

export default Portfolio;
