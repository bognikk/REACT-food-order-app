import classes from "./MealItemForm.module.scss";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const MealItemForm = ({ id }) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: "amount_" + id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<Button>+ Add</Button>
		</form>
	);
};

export default MealItemForm;
