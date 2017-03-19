import React, { Component } from 'react';
import './Comments.css';
import { observer } from 'mobx-react'
import { CommentsCollection } from './stores/comments'
import Comment from './Comment'
import Form from './Form'
import Loading from './Loading'

export default observer(class Comments extends Component {
  comments = new CommentsCollection()

  componentWillMount () {
    const { post } = this.props
    const postId = post.get('id')
    this.comments.fetch({ data: { postId } })
  }

  render() {
    if (this.comments.isRequest('fetching')) {
      return <Loading label='comments' />
    }

    return (
      <div className='Comments'>
        {
          this.comments.models.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))
        }
        <Form comments={this.comments} />
      </div>
    );
  }
})
