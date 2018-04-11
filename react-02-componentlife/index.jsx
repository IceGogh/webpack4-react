import React from 'react'
import ReactDOM from 'react-dom'

var Data = 123;


class Hey extends React.Component {
	constructor() {
		super()
		this.state = {
			time: 1
		}
	}
	render() {
		return (
			<div>time: {this.state.time}</div>
		)
	}
}

class MyTitle extends React.Component {
	constructor() {
		super()
		this.state = {
			time: 1
		}
	}
	componentWillMount() {
		console.log(new Date().getTime() + ' WillMount ' + new Date())
	}
	render() {
		return (
			<h1>{this.state.time}</h1>
		)
	}
	componentDidMount() {
		console.log(new Date().getTime() + ' DidMount ' + new Date())
		setInterval(function(){
			let time = this.state.time + 1
			this.setState({
				time 
			})	
		}.bind(this), 1000)

	}
	componentReceiveProps() {
		console.log(new Date().getTime() + ' ReceiveProps ' + new Date())
	}

	// Warning: MyTitle.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
	shouldComponentUpdate() {
		console.log(new Date().getTime() + ' shouldUpdate ' + new Date())
		return true
		// return false 返回false，则不会执行渲染，也会跳过render前后的钩子函数
	}

	componentDidUpdate() {
		console.log(new Date().getTime() + ' DidUpdate ' + new Date())
	}

	componentWillUnmount() {
		console.log(new Date().getTime() + ' willUnmount ' + new Date())
	}
}

ReactDOM.render(
	<div>
		<Hey/>
		<MyTitle title={Data}/>
	</div>,
	document.getElementById('heytoo')
)
