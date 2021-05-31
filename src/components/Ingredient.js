import React from "react";

const Ingredient = props => {
	if (!props.mealsIngrdient) {
		return <div></div>;
	}

	const items = [];

	for (let i = 0; i < 20; i++) {
		if (
			props.mealsIngrdient[`strIngredient${i}`] !== undefined &&
			props.mealsIngrdient[`strIngredient${i}`] !== ""
		) {
			items.push(
				props.mealsIngrdient[`strIngredient${i}`] +
					" " +
					props.mealsIngrdient[`strMeasure${i}`]
			);
		}
	}
	const renderingrident = items.map(ingrient => {
		return (
			<div className='item'>
				<div className='list'>{ingrient}</div>
			</div>
		);
	});

	return (
		<div className='ui relaxed divided list' key={props.mealsIngrdient.idMeal}>
			{renderingrident}
		</div>
	);
};
export default Ingredient;
