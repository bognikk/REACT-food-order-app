import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import Spinner from "../UI/Spinner";

import classes from "./AvailableMeals.module.scss";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				"https://react-meals-6d8c9-default-rtdb.firebaseio.com/meals.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}

			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	if (httpError) {
		return (
			<section className={classes.mealsError}>
				<Card>
					<p>{httpError}</p>
				</Card>
			</section>
		);
	}

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			idProp={meal.id}
			nameProp={meal.name}
			descriptionProp={meal.description}
			priceProp={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
