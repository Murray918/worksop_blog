import React, { Component } from 'react'
import CommentForm from './CommentForm'

export default class Comment extends Component {
	state = {
		isAddingComment: false
	}

	handleToggle = () => {
		this.setState({
			isAddingComment: !this.state.isAddingComment
		})
	}
	render() {
		const comments = this.props.comments.map((comment, index) => {
			return (
				<li key={index}>
					<h6># {comment} </h6>
					{!!this.state.isAddingComment ? <CommentForm /> : null}
				</li>
			)
		})
		return (
			<div>
				{' '}
				<ul className="comment-list">{comments}</ul>
			</div>
		)
	}
}
