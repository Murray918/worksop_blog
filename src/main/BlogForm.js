import React, { Component } from 'react'

export default class BlogForm extends Component {
    state = {
        user : '',
        entry : ''
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    handleSubmit = (event) => {
        let {user, entry } = this.state
        event.preventDefault()
        this.props.addEntry(user, entry)
    }


	render() {
		return (
			<div>
				<form>
					<div className="row">
						<div className="three columns">
							<label>Username</label>
							<input
								name="user"
                                onChange={this.handleChange}
								className="u-full-width pull-right"
                                placeholder="username"
								type="text"
								value={this.state.user}
								id="user"
							/>
						</div>
					</div>
					<label>Entry</label>
					<textarea
						name="entry"
                        onChange={this.handleChange}
						className="u-full-width"
                        placeholder='Write your post here'
						value={this.state.entry}
						id="entry"
					/>
					<input className="button-primary" type="submit" onClick={this.handleSubmit} />
				</form>
			</div>
		)
	}
}
