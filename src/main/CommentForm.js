import React from 'react'

const CommentForm = props => {
    return (
        <div className="container" id="CommentForm">
        <form className="row">
            <textarea type="text-area"></textarea> 
            <button className='btn-primary' type="submit">submit</button>
        </form>
        </div>
    )
}

export default CommentForm