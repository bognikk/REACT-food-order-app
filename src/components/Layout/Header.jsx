import { Fragment } from "react";

import mealsImage from "../../assets/meals3.jpg";
import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</Fragment>
	);
};

export default Header;
