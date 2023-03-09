import React from "react";

import classes from "./Button.module.scss";

const Button = ({ type, className, onClick, disabled, children }) => {
	return (
		<button
			type={type || "button"}
			className={`${classes.button} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
