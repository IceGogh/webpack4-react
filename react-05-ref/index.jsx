import React from 'react'
import ReactDOM from 'react-dom'
import { StoreA, StoreB, StoreC, NameForm } from './store.jsx' 

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
				<br/>
				<span>不受控组件：在大多数情况下，我们推荐使用受控组件来实现表单。在受控组件中，表单数据由 React 组件负责处理。另外一个选择是不受控组件，其表单数据由 DOM 元素本身处理。
要编写一个未控制组件，你可以使用一个 ref 来从 DOM 获得 表单值，而不是为每个状态更新编写一个事件处理程序。</span>
				<NameForm/>
			</div>
		)
	}
}

ReactDOM.render(
	<Hey/>,
	document.getElementById('hey')
)