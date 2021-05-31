import "./MealItem.css";
const MealItem = props => {
	return (
		<div
			className='four wide column'
			onClick={() => props.onImageClick(props.meal)}
		>
			<div className='ui card'>
				<div className='image'>
					<img
						src={props.meal.strMealThumb}
						alt={props.meal.strMeal}
						key={props.meal.idMeal}
					/>
				</div>
				<div className='content'>
					<h4 className='header image-title meal-item__title'>
						{props.meal.strMeal}{" "}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default MealItem;
