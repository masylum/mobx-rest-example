import React, { Component } from 'react';
import './User.css';
import { observer } from 'mobx-react'

export default observer(class User extends Component {
  render () {
    const { user } = this.props

    return (
      <div className='User'>
        <div
          className='User__Initials'
          style={{backgroundColor: user.color}}
        >
          {user.initials}
        </div>
        {user.get('name')}
      </div>
    )
  }
})
