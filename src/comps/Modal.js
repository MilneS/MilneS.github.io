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
      <div className={classes.backgroundstyle}>
        <div className={classes.cardstyle}>
          <div className={classes.imgstyle}>img</div>
          <div className={classes.titlestyle}>title</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
