import React from 'react'
import ReactDOM from 'react-dom'

class About extends React.Component {
	render(){
		return (
			<div>
				About Com
			</div>
		)
	}
}

class Inbox extends React.Component {
	render() {
		return (
			<div>
				Inbox Com
			</div>
		)
	}
}

class Home extends React.Component {
	render() {
		return (
			<div>
				Home Com
			</div>
		)
	}
}

class App extends React.Component{
	constructor() {
		super()
		this.state = {
			route: window.location.hash.substr(1)
		}
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}
	//   无效果
	// shouldComponentUpdate() {
	// 	window.addEventListener('hashchange', () => {
	// 		this.setState({
	// 			route: window.location.hash.substr(1)
	// 		})
	// 	})
	// 	return true
	// }
	render() {
		let Child
		switch(this.state.route) {
			case '/about': Child = About; break;
			case '/inbox': Child = Inbox; break;
			default: 	Child = Home;
		}
		return (
			<div>
				<h2>无 react-router实现路由</h2>
				<ul>
					<li><a href="#/about">About</a></li>
					<li><a href="#/inbox">Inbox</a></li>
				</ul>
				<Child/>
			</div>
		)
	} 
}

ReactDOM.render(
	<div>
		<App/>
	</div>,
	document.getElementById('hey')
)