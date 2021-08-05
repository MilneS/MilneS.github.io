import classes from "./Main.module.css";
import foodOrder from "./projectspics/foodorder.png";
import meetups from "./projectspics/meetups.png";
import quotes from "./projectspics/quotes.png";
import expensesChart from "./projectspics/expenseschart.png";
import colorGame from "./projectspics/colorgame.png";
import yelpCamp from "./projectspics/yelpcamp.png";

import Modal from './Modal';
import { useState } from "react";


const Portfolio = () => {

  const [showModal, setShowModal]=useState(false);

  const modalHandler=(e)=>{
    setShowModal( !showModal )
  }



  return (
      <div className={classes.containerright} id="portfolio">
        <div>
          <h2 className={classes.title}>Projects</h2>
        </div>
        <div>
          <ul className={classes.projectscontainer}>
            <li>
              <div className={classes.imgcontainer}>
                <img src={foodOrder} alt="" />
                <div className={classes.after}>
                
                  <p onClick={modalHandler} className={classes.view}>
                    View
                  </p>
                  {showModal && <Modal/>}
                </div>
              </div>

              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/food-order-app">
                  Food Order app
                </a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div className={classes.imgcontainer}>
                <img src={meetups} alt="" />
                <div className={classes.after}>
                  <p className={classes.view}>View</p>
                </div>
              </div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/meetup">Meetup</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div className={classes.imgcontainer}>
                <img src={quotes} alt="" />
                <div className={classes.after}>
                  <p className={classes.view}>View</p>
                </div>
              </div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/quote">Quote</a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div className={classes.imgcontainer}>
                <img src={expensesChart} alt="" />
                <div className={classes.after}>
                  <p className={classes.view}>View</p>
                </div>
              </div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/expenses-chart">
                  Expenses Chart
                </a>
              </div>
              <div>React</div>
            </li>
            <li>
              <div className={classes.imgcontainer}>
                <img src={colorGame} alt="" />
                <div className={classes.after}>
                  <p className={classes.view}>View</p>
                </div>
              </div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/color-game">Color Game</a>
              </div>
              <div>Javascript</div>
            </li>
            <li>
              <div className={classes.imgcontainer}>
                <img src={yelpCamp} alt="" />
                <div className={classes.after}>
                  <p className={classes.view}>View</p>
                </div>
              </div>
              <div>
                <i className="fa fa-github" />
                <a href="https://github.com/MilneS/yelp-camp">YelpCamp</a>
              </div>
              <div>Javascript</div>
            </li>
          </ul>
        </div>
        <div>
          <a href="https://github.com/MilneS">
            <button id="bouton">Full Portfolio</button>
          </a>
        </div>
        <div className={classes.line} id="contact" />
      </div>
  );
};

export default Portfolio;
