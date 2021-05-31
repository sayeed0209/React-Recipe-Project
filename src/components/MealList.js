import React from "react";
import MealItem from "./MealItem";
import "./MealList.css";
const MealList = props => {
	const renderedMeals = props.foundMeals.map(foundMeal => {
		return (
			<MealItem
				meal={foundMeal}
				key={foundMeal.idMeal}
				onImageClick={props.onImageClickFromApp}
				id={foundMeal.idMeal}
			/>
		);
	});

	return <div className='ui grid'>{renderedMeals}</div>;
};

export default MealList;
