import React from 'react';
import Ingredient from './Ingredient';
const MealDeatils = props => {
	if (!props.meal) {
		return <div></div>;
	}
	// console.log(props.meal);

	return (
		<div className="ui grid">
			<div className="eight  wide column">
				<div className="ui items ui segment">
					<div className="item">
						<div className="medium ui image">
							<img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
						</div>
						<div className="content ">
							<h3 className="header image-title">{props.meal.strMeal} </h3>

							<div className="description">
								<h4 className="header image-title">Instructions</h4>
								<div className="meta">
									<span>{props.meal.strInstructions}</span>
								</div>
								<Ingredient mealsIngrdient={props.meal} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MealDeatils;
