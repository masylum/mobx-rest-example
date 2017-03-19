import React, { Component } from 'react';
import './Posts.css';
import { observer } from 'mobx-react'
import posts from './stores/posts'
import Post from './Post'
import Loading from './Loading'

export default observer(class Posts extends Component {
  componentWillMount () {
    posts.fetch()
  }

  render() {
    if (posts.isRequest('fetching')) {
      return <Loading label='posts' />
    }

    return (
      <div className='Posts'>
        {
          posts.models.map(post => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>
    );
  }
})
