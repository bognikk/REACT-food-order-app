import classes from "./Input.module.scss";

const Input = ({ label, input }) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} />
		</div>
	);
};

export default Input;
