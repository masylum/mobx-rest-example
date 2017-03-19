import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'
import Loading from './Loading'
import users from './stores/users'
import { observer } from 'mobx-react'

export default observer(class App extends Component {
  componentWillMount () {
    users.fetch()
  }

  renderContent () {
    if (users.isRequest('fetching')) {
      return <Loading label='application' />
    }

    return <Posts />
  }

  render() {
    return (
      <div className='App'>
        <div className='App__header'>
          mobx-rest demo
        </div>
        <div className='App__body'>
          {this.renderContent()}
        </div>
      </div>
    );
  }
})
