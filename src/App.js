import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './main'

export default class App extends Component {
	state = {
		currentUser: 'Muhr',
		blogEntries: [
			{
				user: 'Muhr',
				entry:
					'Nostrud qui culpa nostrud labore laboris minim laboris incididunt ex irure laboris anim cillum. Lorem culpa mollit minim deserunt duis voluptate irure et proident eu fugiat. Velit ad excepteur ut deserunt. Consequat aliqua aliquip quis duis est labore amet ad nulla.',
				date: Date.now()
			},
			{
				user: 'Muhr',
				entry:
					'Ut elit sunt ad id voluptate pariatur nulla ad duis in ut. Elit incididunt consectetur amet non nisi id aliquip esse ut. Et proident esse eu magna cillum ea consequat consequat eiusmod.',
				date: Date.now()
			},
			{
				user: 'Muhr',
				entry:
					'Ut elit sunt ad id voluptate pariatur nulla ad duis in ut. Elit incididunt consectetur amet non nisi id aliquip esse ut. Et proident esse eu magna cillum ea consequat consequat eiusmod.',
				date: Date.now()
			}
		]
	}

	render() {
		return (
			<div className="App container">
				<header className="App-header">
					<h1>Welcome to our first React app!</h1>
				</header>
				<section>
					<img src={logo} className="App-logo" alt="logo" />
					<Main blogEntries={this.state.blogEntries} />
				</section>
			</div>
		)
	}
}
