import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = ({ nameProp, descriptionProp, priceProp, idProp }) => {
	const price = `$${priceProp.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{nameProp}</h3>
				<div className={classes.description}>{descriptionProp}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={idProp} />
			</div>
		</li>
	);
};

export default MealItem;
