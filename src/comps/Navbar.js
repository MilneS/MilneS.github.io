import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.header}>
        <ul>
          <a href='#home'>Home</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
