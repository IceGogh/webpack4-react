import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
class Hey extends React.Component {
	render() {
		return (
			<div className="title">game</div>
		)
	}
}

class StatusTitle extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				当前下子方为: {this.props.curRole}
			</div>
		)
	}
}

class Box extends React.Component {
	constructor() {
		super()
		this.clkin = this.clkin.bind(this)
		this.state = {
			role: 'X',
			statusArr: function() {
				const Arr = []
				for(let i = 0; i < 9; i++){
					Arr.push(i)
				}
				return Arr
			}
		}
	}
	
	clkin(e) {
		let ind = e.target.attributes['ind'].value
		let arr = this.state.statusArr()
		let role = this.state.role
		arr[ind] = role
		if(role === 'X'){
			this.setState({
				role: 'O'
			})
		}else {
			this.setState({
				role: 'X'
			})
		}

		this.setState({
			statusArr: []
		})
	}

	render() {
		return (
			<div>
				<StatusTitle curRole={this.state.role}/>
				<div className="box-Wrap">
					{
						this.state.statusArr().map((item, index) => {
							return <span 
											key={index}
											ind={index}
											onClick={this.clkin}></span>
						})
					}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Hey/>
		<Box/>
	</div>,
	document.getElementById('hey')
)