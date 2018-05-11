import React from 'react'
import ReactDOM from 'react-dom'

var Data = 123;


// class Hey extends React.Component {
// 	constructor() {
// 		super()
// 		this.clk = this.clk.bind(this)
// 		this.state = {
// 			time: '???'
// 		}
// 	}
// 	clk() {
// 		this.setState({
// 			time: ++this.state.time
// 		})
// 	}
// 	render() {
// 		return (
// 			<div onClick={this.clk}>
// 				time: {this.state.time}
// 				<HeyChild child={this.state.time}/>
// 			</div>
// 		)
// 	}
// }

class HeyChild extends React.Component {
	componentWillMount(){
		console.log(new Date().getTime() + ' Child WillMount' + new Date())
		console.log(this)
	}
	render() {
		return (
			<div>
				HeyChild <i onClick={this.props.clkReduce}>{this.props.child}</i>
			</div>
		)
	}
	componentDidMount() {
		console.log(new Date().getTime() + ' Child DidMount' + new Date())
	}
	componentReceiveProps() {
		console.log(new Date().getTime() + ' Child ReceiveProps ' + new Date())
	}
	shouldComponentUpdate() {
		console.log(new Date().getTime() + ' Child shouldUpdate ' + new Date())
		return true
		// return false // 返回false，则不会执行渲染，也会跳过render前后的钩子函数
	}
	componentDidUpdate() {
		console.log(new Date().getTime() + ' Child DidUpdate ' + new Date())
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
		// willmount 时  this实例已经生成 
		console.log('state', this.state)
		console.log(new Date().getTime() + ' WillMount ' + new Date())
	}
	clkAdd() {
		this.setState({
			time: ++this.state.time
		})
	}
	reduce() {
		this.setState({
			time: --this.state.time
		})
	}
	render() {
		return (
			<div>
				<div onClick={this.clkAdd.bind(this)}>mytitle's time:{this.state.time}</div>
				<HeyChild child={this.state.time} clkReduce={this.reduce.bind(this)}/>
			</div>
		)
	}
	componentDidMount() {
		console.log(new Date().getTime() + ' DidMount ' + new Date())
		// setInterval(function(){
		// 	let time = this.state.time + 1
		// 	this.setState({
		// 		time 
		// 	})	
		// }.bind(this), 1000)

	}
	componentReceiveProps() {
		console.log(new Date().getTime() + ' ReceiveProps ' + new Date())
	}

	// Warning: MyTitle.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
	shouldComponentUpdate() {
		console.log(new Date().getTime() + ' shouldUpdate ' + new Date())
		return true
		// return false // 返回false，则不会执行渲染，也会跳过render前后的钩子函数
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
		{/* <Hey/> */}
		<MyTitle title={Data}/>
	</div>,
	document.getElementById('heytoo')
)
