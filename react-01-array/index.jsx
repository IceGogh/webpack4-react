import React from 'react'
import ReactDOM from 'react-dom'

const items = [
	{
		msg: 'aaaaaa',
		author: 'heytoo1'
	},
	{
		msg: 'b',
		author: 'heytoo2'
	},
	{
		msg: 'c',
		author: 'heytoo3'
	},
]

class Note extends React.Component {
	constructor() {
		super()
		this.state = {
			msg: '第一条22msg'
		}
	}
	render(){
		return (
			<div className="note">
				: { this.props.msg }
			</div>
		)
	}
}

class Author extends React.Component {
	constructor() {
		super()
		this.state = {
			name: 'heytoo2'
		}
	}
	render() {
		return (
			<div className="author">
				by { this.props.auth }
			</div>
		)
	}
}

class Lists extends React.Component {
	render() {
		return (
			<ol>
				{
					React.Children.map(this.props.children, (child) => {
						return <li>{ child }</li>
					})
				}
			</ol>
		)
	}
}

class Item extends React.Component {
	constructor() {
		super()
		this.state = {
			info: items
		}
	}
	render() {
		return (
			<div>
				{
					items.map(function(item, ind){
						return (
							<div key={ 'key' + ind }>
								<Note msg={ item.msg }/>
								<Author auth={ item.author }/>
							</div>
						)
					})
				}
				<Lists>
					<span>
						hellow
					</span>
					<a>
						www
					</a>
				</Lists>
			</div>
		)
	}
}

ReactDOM.render(
	<Item/>,
	document.getElementById('heytoo')
)