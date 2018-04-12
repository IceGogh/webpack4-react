import React from 'react'
import ReactDOM from 'react-dom'
import { StoreA, StoreB, StoreC } from './store.jsx' 

const propsArr = {
	A: 'AA',
	B: 'BB',
	C: 'CC'
}
class Hey extends React.Component {
	render() {
		return (
			<div>
				<StoreA {...propsArr}/>
				<StoreB/>
				<br/>
				<span>StoreC: 查看 console</span>
				<StoreC/>
			</div>
		)
	}
}

ReactDOM.render(
	<Hey/>,
	document.getElementById('hey')
)