import React, { Component } from 'react';
import './Post.css';
import { observer } from 'mobx-react'
import Comments from './Comments'
import User from './User'

export default observer(class Post extends Component {
  state = { open: false }

  onToggle () {
    this.setState(state => (
      { open: !state.open }
    ))
  }

  render () {
    const { post } = this.props

    return (
      <div className='Post'>
        <a className='Post__Link' href='#' onClick={this.onToggle.bind(this)}>
          <div className='Post__Link__Text'>
            {post.get('title')}
          </div>
          <User user={post.user} />
        </a>
        {this.state.open && <Comments post={post} />}
      </div>
    )
  }
})
