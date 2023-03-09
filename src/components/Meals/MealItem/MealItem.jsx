import classes from "./MealItem.module.scss";

const MealItem = ({ nameProp, descriptionProp, priceProp }) => {
	const price = `$${priceProp.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{nameProp}</h3>
				<div className={classes.description}>{descriptionProp}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div></div>
		</li>
	);
};

export default MealItem;
