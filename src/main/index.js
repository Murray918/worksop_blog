import React, { Component } from 'react'
import BlogForm from './BlogForm'
import Comments from './Comments'

export default class Main extends Component {
	state = {
		isAddingEntry: false,
		currentUser: 'Muhr',
		blogEntries: [
			{
				user: 'Muhr',
				entry:
					'Nostrud qui culpa nostrud labore laboris minim laboris incididunt ex irure laboris anim cillum. Lorem culpa mollit minim deserunt duis voluptate irure et proident eu fugiat. Velit ad excepteur ut deserunt. Consequat aliqua aliquip quis duis est labore amet ad nulla.',
				comments: []
			},
			{
				user: 'Muhr',
				entry:
					'Ut elit sunt ad id voluptate pariatur nulla ad duis in ut. Elit incididunt consectetur amet non nisi id aliquip esse ut. Et proident esse eu magna cillum ea consequat consequat eiusmod.',
				comments: []
			},
			{
				user: 'Muhr',
				entry:
					'Ut elit sunt ad id voluptate pariatur nulla ad duis in ut. Elit incididunt consectetur amet non nisi id aliquip esse ut. Et proident esse eu magna cillum ea consequat consequat eiusmod.',
				comments: ["I don't know what this means"]
			}
		]
	}

	handleDeletePost = index => {
       let newState = this.state.blogEntries
        newState.splice(index, 1)
        this.setState({
            blogEntries : newState 
        })
        
	}

	handleTogglePostForm = () => {
		console.log('clicked')
		this.setState({
			isAddingEntry: !this.state.isAddingEntry
		})
    }
    
	handleNewPost = (user, entry) => {
		this.setState({
			blogEntries: [
                { user, entry, comments: [] },
                ...this.state.blogEntries
            ],
			isAddingEntry: !this.state.isAddingEntry
		})
	}

	render() {
		const entries = this.state.blogEntries.map((item, index) => {
			return (
				<li className="container" key={index} data={index}>
					<div className="u-full-width">
						<h5>{item.user}</h5>
					</div>

					<div>
						<p>{item.entry}</p>
						<span className="u-pull-right">
							<div className="row">
								<a onClick={this.handleEditPost} className="six columns">
									Edit
								</a>
								<a
									onClick={() => this.handleDeletePost(index)}
									className="six columns"
								>
									Delete
								</a>
							</div>
						</span>
					</div>
					<Comments entryId={index} comments={item.comments} />
				</li>
			)
		})

		return (
			<section>
				<h2>Party Blog</h2>
				<div className="u-full-width">
					{!!this.state.isAddingEntry ? (
						<BlogForm
							className="container"
							addEntry={this.handleNewPost}
							toggleForm={this.handleTogglePostForm}
						/>
					) : (
						<button
							className="button-primary u-pull-right"
							onClick={this.handleTogglePostForm}
						>
							New entry
						</button>
					)}
				</div>
				<ul>{entries}</ul>
			</section>
		)
	}
}
