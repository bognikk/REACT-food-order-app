import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
