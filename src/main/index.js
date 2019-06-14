import React, { Component } from 'react'
import CommentForm from './CommentForm'

export default class Main extends Component {
	state = {
		isAddingComment: false
	}

	handleAddingComment = () => {
		this.setState({
			isAddingComment: !this.state.isAddingComment
		})
	}
	render() {
		const entries = this.props.blogEntries.map((item, index) => {
			return (
				<li key={index}>
					<h5>{item.user}</h5>
					<p>{item.entry}</p>
					<div>
						{!!this.state.isAddingComment ? <CommentForm /> : null}
						<button onClick={this.handleAddingComment}>add comment</button>
					</div>
				</li>
			)
		})

		return (
			<div>
				<h2>Party Blog</h2>
				<ul>{entries}</ul>
			</div>
		)
	}
}
