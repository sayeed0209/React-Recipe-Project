import React from "react";

class SearchBar extends React.Component {
	state = { term: "chicken" };
	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onSubmitForm = e => {
		e.preventDefault();
		this.props.onSubmitFromApp(this.state.term);
	};

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onSubmitForm}>
					<div className='field'>
						<label htmlFor='search'>Search Meal</label>
						<input
							type='text'
							name='Seach'
							placeholder='Search your favorite Meal'
							id='search'
							onChange={this.onInputChange}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
