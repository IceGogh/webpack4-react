import React from 'react'

export class StoreA extends React.Component {
	constructor(){
		super()
		this.state = {
			arr: []
		}
	}
	componentWillMount() {
		let i, j = []
		for(i in this.props){
			j.push(this.props[i])
		}
		this.setState({
			arr: j
		})
	}
	render(){
		return (
			<div>
				storeA module:
				{
					this.state.arr.map(function(item, ind){
						return <div key={ind}>{item}</div>
					})
				}				
			</div>
		)
	}
}

export class StoreB extends React.Component {
	constructor(){
		super()
		// this.showRef = this.showRef.bind(this)
	}
	showRef() {
		alert(this.refs.input1.value)
	}
	render() {
		return (
			<div>
				storeB module:
				<div>
					<input ref="input1" placeholder="input1 holder value"/>
					<br/>
					<input ref="input2" placeholder="input2 holder value"/>
					<hr/>
					<button onClick={this.showRef.bind(this)}>alert ref</button>
				</div>
			</div>
		)
	}
	componentDidMount(){
		console.log('this', this.refs.input1)
	}
	shouldComponentUpdate() {
		console.log('shold', this.refs.input2)
	}
}

export class StoreC extends React.Component {
	constructor() {
		super()
		this.state = {
			text: 'holder value'
		}
	}
	focus(e) {
		this.setState({
			text: ''
		})
	}
	changeInput(e) {
		this.setState({
			text: e.target.value
		})
	}
	render() {
		return (
			<div>
				<input type="text" ref={(v)=>{console.log(v)}}
					onChange={this.changeInput.bind(this)}
					value={this.state.text}
					onFocus={this.focus.bind(this)}/>
			</div>
		)
	}
}