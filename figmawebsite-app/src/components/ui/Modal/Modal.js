import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'
const Backdrop = props => {
    return (<div className={classes.backdrop} onClick={props.hideCart} />

    );
};
const Modaloverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
};
const Modal = props => {
    const PORTAL_ELEMENT = document.getElementById("overlays");
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart} />, PORTAL_ELEMENT)}
        {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>, PORTAL_ELEMENT)}
    </Fragment>);
};
export default Modal;