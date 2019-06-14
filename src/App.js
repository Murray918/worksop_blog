import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './main'

export default class App extends Component {
  state = {
    isLoggedIn : false
  }

	render() {
		return (
			<div className="App container">
				<header className="App-header">
					<h1>Welcome to our first React app!</h1>
				</header>
				<section>
					<img src={logo} className="App-logo" alt="logo" />
					<Main />
				</section>
			</div>
		)
	}
}
