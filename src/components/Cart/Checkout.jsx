import classes from "./Checkout.module.scss";

const Checkout = ({ onCancel }) => {
	const confirmHandler = (event) => {
		event.preventDefault();
	};
	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" />
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" />
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" />
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" />
			</div>
			<div className={classes.actions}>
				<button
					className={classes["button--alt"]}
					type="button"
					onClick={onCancel}
				>
					Cancel
				</button>
				<button>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
