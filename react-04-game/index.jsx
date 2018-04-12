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
		this.clr = this.clr.bind(this)
		this.initArr = this.initArr.bind(this)
		this.backStep = this.backStep.bind(this)
		this.state = {
			role: 'X',
			statusArr: [],
			stepPosition: -1,
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
	// 初始化数组
	initArr() {
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

	componentWillMount() {
		this.initArr()
	}

	clr() {
		this.setState({
			role: 'X',
			statusArr: [],
			XArr: [],
			OArr: []
		})
		this.initArr()
	}
	backStep() {
		let Step = this.state.stepPosition
		if(Step === -1) {
			return false
		}
		let role = this.state.role
		let statusArr = this.state.statusArr
		statusArr[Step] = null
		this.setState({
			statusArr,
			stepPosition: -1,
			role: role === 'X' ? 'O' : 'X'
		})
	}

	clkin(e) {
		let ind = e.target.attributes['ind'].value
		let arr = this.state.statusArr
		let preWord = e.target.innerHTML
		// 已下位置 返回false
		if(preWord === 'X' || preWord === 'O') {
			return false
		}
		let role = this.state.role
			, Xarr = this.state.XArr
			, Oarr = this.state.OArr
		arr[ind] = role

		// 更新棋盘数组
		this.setState({
			statusArr: arr,
			stepPosition: ind
		})

		//  更新 当前下子方  更新双方已经下子数据
		if (role === 'X') {
			Xarr.push(Number(ind))
			this.setState({
				role: 'O',
				XArr: Xarr
			})
			if (Xarr.length >= 3) {
				for(let i = 0; i < WinArr.length; i++) {
					const [a, b, c] = WinArr[i]
					if(arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
						alert('X win!')
					}
				}
			}
		} else {
			Oarr.push(ind)
			this.setState({
				role: 'X',
				OArr: Oarr
			})

			if (Oarr.length >= 3) {
				for(let i = 0; i < WinArr.length; i++) {
					const [a, b, c] = WinArr[i]
					if(arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
						alert('O win!')
					}
				}
			}
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
								className={(item === 'X' || item === 'O') ? ( item === 'X' ? 'Xclick' : 'Oclick') : ''}
								onClick={this.clkin}>{ (item === 'X' || item === 'O') ? item : ''}</span>
						})
					}
				</div>
				<button onClick={this.clr}>Reset</button>
				<button 
					disabled={this.state.stepPosition === -1 ? true : false}
					onClick={this.backStep}>Back 1 step</button>
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