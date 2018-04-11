import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Hi extends React.Component {
	constructor() {
		super()
		this.state = {
			man: 'heytoo2018'
		}
	}
	render() {
		return (
			<div>
				<div className="title">
					react by {this.state.man}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Hi age="18"/>,
	document.getElementById('heytoo')
)