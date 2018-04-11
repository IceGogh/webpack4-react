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

const WinArr = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

class Box extends React.Component {
	constructor() {
		super()
		this.clkin = this.clkin.bind(this)
		this.state = {
			role: 'X',
			statusArr: [],
			XArr: [],
			OArr: []
			// 初始 statusArr为空数据, 将赋值函数放到  willmount 周期中赋值
			// statusArr: function() {
			// 	const Arr = []
			// 	for(let i = 0; i < 9; i++){
			// 		Arr.push(i)
			// 	}
			// 	return Arr
			// }
		}
	}
	componentWillMount() {
		let arr = (() => {
			const Arr = []
			for (let i = 0; i < 9; i++) {
				Arr.push(i)
			}
			return Arr
		})()
		this.setState({
			statusArr: arr
		})

	}
	clkin(e) {
		let ind = e.target.attributes['ind'].value
		let arr = this.state.statusArr
			, role = this.state.role
			, Xarr = this.state.XArr
			, Oarr = this.state.OArr
		arr[ind] = role

		// 更新棋盘数组
		this.setState({
			statusArr: arr
		})


		//  更新 当前下子方  更新双方已经下子数据
		if (role === 'X') {
			Xarr.push(Number(ind))
			this.setState({
				role: 'O',
				XArr: Xarr
			})
			if (Xarr.length >= 3) {
				if (
					WinArr.some(function (item) {
						console.log('item', item)
						console.log('X', Xarr)
						return item === Xarr
					})
				) {
					console.log(13)
				} else {
					console.log(24)
				}
			}
		} else {
			Oarr.push(ind)
			this.setState({
				role: 'X',
				OArr: Oarr
			})
		}



	}

	render() {
		return (
			<div>
				<StatusTitle curRole={this.state.role} />
				<div className="box-Wrap">
					{
						this.state.statusArr.map((item, index) => {
							return <span
								key={index}
								ind={index}
								onClick={this.clkin}>{item}</span>
						})
					}
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Hey />
		<Box />
	</div>,
	document.getElementById('hey')
)