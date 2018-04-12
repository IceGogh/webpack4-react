import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, HashRouter, Match, Route, Link, HashHistory, IndexLink } from 'react-router-dom'

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
	}
	render() {
		return (
			<div>
				<h2>React-router</h2>
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/inbox">Inbox</Link>
					</li>
				</ul>
				{this.props.children}
			</div>
		)
	} 
}

ReactDOM.render(
	<HashRouter history={HashHistory}>
		<App>
			<Route path="/" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}>
      </Route>
		</App>
  </HashRouter>,
	document.getElementById('hey')
)