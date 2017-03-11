import React, { Component } from 'react';
import Navigation from './Navigation.jsx'

class App extends Component {
	render () {
		return (
			<div>
				<Navigation />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
