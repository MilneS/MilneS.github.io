import classes from "./Modal.module.css";
import "font-awesome/css/font-awesome.min.css";


const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <>
      <div className={classes.modalbackground}>
        <div className={classes.modalcard}>
          <div className={classes.modalbtn}><i className="fa fa-times-circle-o" /></div>
          <div className={classes.modalimg}>img</div>
          <div className={classes.modaltitle}>title</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
