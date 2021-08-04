import Navbar from "./comps/Navbar";
import classes from "./App.module.css";
import Home from "./comps/Home";
import About from "./comps/About";
import Portfolio from "./comps/Portfolio";
import Contact from "./comps/Contact";

function App() {
  return (
    <>
      <div className={classes.appContainer}>
        <div className={classes.left}>
          <Navbar />
          <Home />
        </div>
        <div className={classes.right}>
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
