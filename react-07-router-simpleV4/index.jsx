import React from 'react'
import ReactDOM , { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
class Heytoo extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<header>Our React Router 4 App</header>
				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/user">User</Link>
				</div>
				<main>
					<Route path="/" exact component={HomeComponent} />
					<Route path="/User" component={UserComponent} />
				</main>
			</div>
		)
	}
}

const HomeComponent = () => <h3>Home page</h3>
const UserComponent = () => <h3>User page</h3>

ReactDOM.render(
	<BrowserRouter>
		<Heytoo/>
	</BrowserRouter>,
	document.getElementById('hey')
)