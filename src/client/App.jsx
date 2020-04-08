import * as React from 'react';
import Derp from './components/Derp';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<Derp />
				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
			</main>
		);
	}
}

export default App;
