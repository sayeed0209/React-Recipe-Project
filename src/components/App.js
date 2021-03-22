import React from 'react';
import axios from 'axios';
import MealDeatils from './MealDetails';
import SearchBar from './SearchBar';
import MealList from './MealList';
class App extends React.Component {
	state = { meals: [], seletcedImage: null };
	onFromSubmitApp = async searchTerm => {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
		);
		this.setState({ meals: res.data.meals, seletcedImage: res.data.meals[0] });
	};
	onImageClick = image => {
		// console.log(image + 'from APP');
		this.setState({ seletcedImage: image });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmitFromApp={this.onFromSubmitApp} />

				<MealDeatils meal={this.state.seletcedImage} />
				<MealList
					foundMeals={this.state.meals}
					onImageClickFromApp={this.onImageClick}
				/>
			</div>
		);
	}
}

export default App;
