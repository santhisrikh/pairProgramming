import React from "react";
import axios from "axios";
class Random extends React.Component {
	constructor() {
		super();
		this.state = {
			randomQuote: [],
		};
	}
	componentDidMount() {
		this.getRandomQuote();
	}
	getRandomQuote = () => {
		axios
			.get("https://programming-quotes-api.herokuapp.com/quotes/random")
			.then((res) => {
				// console.log(res.data)
				this.setState({
					randomQuote: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		const { randomQuote } = this.state;
		return (
			<>
				<div>{randomQuote.en}</div>
				<button onClick={this.getRandomQuote}>Random</button>
			</>
		);
	}
}
export default Random;
