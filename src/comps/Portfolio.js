import classes from "./Main.module.css";

const Portfolio = () => {
  return (
    <>
      <div className={classes.containerright} id='portfolio'>
        <div>
          <h2 className={classes.title}>Projects</h2>
        </div>
        <div>
          <ul className={classes.projectscontainer}>
            <li>
              <div></div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/food-order-app">Food Order app</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div></div>
              <div>
              <i className="fa fa-github" />
                <a href="https://github.com/MilneS/meetup">Meetup</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div></div>
              <div>
              <i className="fa fa-github" />
                <a href="https://github.com/MilneS/quote">Quote</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div></div>
              <div>
              <i className="fa fa-github" />
                <a href="https://github.com/MilneS/expenses-chart">Expenses Chart</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div></div>
              <div>
              <i className="fa fa-github" />
                <a href="https://github.com/MilneS/color-game">Color Game</a>
              </div>
              <div>Javascript</div>
            </li>
            <li>
              <div></div>
              <div>
              <i className="fa fa-github" />
                <a href="https://github.com/MilneS/yelp-camp">YelpCamp</a>
              </div>
              <div>Javascript</div>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://github.com/MilneS'><button id='bouton'>Full Portfolio</button></a>
        </div>
        <div className={classes.line} id="contact" />
      </div>
    </>
  );
};

export default Portfolio;
