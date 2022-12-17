import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => (
  <div className={classes.backdrop} onClick={props.onClick}></div>
);

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElem = document.getElementById("overlay")!
console.log(portalElem);


const Modal: React.FC<{onClick: () => void, children: React.ReactNode}> = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElem)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
    </Fragment>
}

export default Modal;