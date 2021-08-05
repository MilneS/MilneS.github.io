import classes from "./Modal.module.css";
import "font-awesome/css/font-awesome.min.css";

const Modal = (props) => {

  const modalHandler = () => {
    props.closeModal(false)
  };



  return (
    <>
      <div onClick={modalHandler} className={classes.modalbackground}>
        <div onClick={e=>e.stopPropagation()} className={classes.modalcard}>
          <div className={classes.modalbtn}>
            <i onClick={modalHandler} className="fa fa-times-circle-o" />
          </div>
          <div className={classes.modalimg}>img</div>
          <div className={classes.modaltitle}>title</div>
        </div>
      </div>
    </>
  );
};

export default Modal;