import React from "react";

import classes from "./Spinner.module.scss";

const Spinner = (props) => {
	return (
		<div className={classes.spinner}>
			<div className={classes.ldsRoller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
