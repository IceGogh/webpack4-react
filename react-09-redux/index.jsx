import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
const store = createStore(fn)
const state = store.getState()


class Hey extends React.Component {
	constructor() {
		super()
		this.state = {
			stateVal1 : ' val!!!'
		}
	}
	render(){
		return (
			<div>state : {this.state.stateVal1}</div>
		)
	}
}

ReactDOM.render(
	<Hey/>,
	document.getElementById('heytoo')
)