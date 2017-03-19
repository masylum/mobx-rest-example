import React, { Component } from 'react';
import './Comment.css';
import { observer } from 'mobx-react'

export default observer(class Comment extends Component {
  render () {
    const { comment } = this.props
    const className = comment.isNew
      ? 'Comment Comment--New'
      : 'Comment'

    return (
      <div className={className}>
        {comment.get('body')}
      </div>
    )
  }
})
