import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './main'

const  App = () => {
		return (
			<div className="container">
				<header >
					<h1>Welcome to our first React app!</h1>
				</header>
				<section>
					<img src={logo} alt="logo" />
					<Main />
				</section>
			</div>
		)
	}

export default App