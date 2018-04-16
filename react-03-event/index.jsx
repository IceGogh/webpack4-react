import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Hey extends React.Component {
	constructor() {
		super()
		// this.clickDiv = this.clickDiv.bind(this)
		this.state = {
			time: 0
		}
	}
	clickDiv(e) {
		let time = ++this.state.time
		this.setState({ time })
	}
	render() {
		return (
			<div onClick={this.clickDiv.bind(this)}>
				click {this.state.time} time{ this.state.time > 1 ? 's' : ''}
			</div>
		)
	}
}
class TodoBox extends React.Component {
	constructor() {
		super()
		this.deleteEvent = this.deleteEvent.bind(this)
		this.state = {
			keyWords: '',
			events: []
		}
	}
	keyy(e) {
		let keyWords = e.target.value
		this.setState({
			keyWords
		})
	}
	submitWords(e) {
		let event = this.state.keyWords
		let arr = this.state.events
		arr.push(event)
		this.setState({
			keyWords: '',
			events: arr
		})
	}
	deleteEvent(e){
		let ind = Number(e.target.attributes['ind'].value)
		let arr = this.state.events
		arr.splice(ind, 1)
		this.setState({
			events: arr
		})
	}
	render() {
		return (
			<div>
				<TodoList 
					keyin={this.state.keyWords} 
					keying={this.keyy.bind(this)}
					submitEvent={this.submitWords.bind(this)}/>
				<Todoing 
					events={this.state.events}
					dele={this.deleteEvent.bind(this)}/>
			</div>
		)
	}
}

class TodoList extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<input type="text" value={this.props.keyin} onChange={this.props.keying}/>
				<button onClick={this.props.submitEvent}>confirm</button>
			</div>
		)
	}
}

class Todoing extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<ul>
				{
					this.props.events.map((event, index) => {
						return <li key={'key' + index}>{event}
							<button onClick={this.props.dele} ind={index} >delete</button>
						</li>
					})
				}
			</ul>
		)
	}
}
ReactDOM.render(
	<div>
		<Hey/>
		<TodoBox/>
	</div>,
	document.getElementById('heytoo')
)