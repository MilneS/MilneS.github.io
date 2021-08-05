import classes from "./Modal.module.css";
import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    !showModal && setShowModal(true);
    console.log(showModal);
  };

  return (
    <>
      <div className={classes.modalbackground}>
        <div className={classes.modalcard}>
          <div className={classes.modalimg}>img</div>
          <div className={classes.modaltitle}>title</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
