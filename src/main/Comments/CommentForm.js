import React, { Component } from 'react'

export default class CommentForm extends Component {
	state = {
		comment: ''
	}

	handleChange = event => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log(this.state.comment)
	}

	render() {
		return (
			<div id="CommentForm">
				<form className="row">
					<div className="ten columns">
						<textarea
							name="comment"
							value={this.state.comment}
							onChange={this.handleChange}
							className="u-full-width"
							type="text-area"
						/>
					</div>
					<button
						onClick={this.handleSubmit}
						className="btn-primary"
						type="submit"
					>
						submit
					</button>
				</form>
			</div>
		)
	}
}
