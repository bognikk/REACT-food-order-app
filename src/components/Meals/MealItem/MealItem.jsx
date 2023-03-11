import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = ({ nameProp, descriptionProp, priceProp, idProp }) => {
	const cartCtx = useContext(CartContext);
	const price = `$${priceProp.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: idProp,
			name: nameProp,
			amount: amount,
			price: priceProp,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{nameProp}</h3>
				<div className={classes.description}>{descriptionProp}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={idProp} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
