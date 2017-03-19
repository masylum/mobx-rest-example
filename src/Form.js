import React, { Component } from 'react';
import './Form.css';
import { observer } from 'mobx-react'

export default observer(class Form extends Component {
  state = { body: '' }

  onChange (event) {
    this.setState({ body: event.target.value })
  }

  onSubmit (event) {
    event.preventDefault()
    const { comments } = this.props
    comments.create({ body: this.state.body })
  }

  render() {
    const { comments } = this.props

    if (comments.isRequest('creating')) {
      return <div className='FormSaving'>Saving comment...</div>
    }

    return (
      <form onSubmit={this.onSubmit.bind(this)} className='Form'>
        <label className='Form__Label'>Body</label>
        <input className='Form__Textarea' onChange={this.onChange.bind(this)} type='text' />
        <button className='Form__Submit' type='submit'>Submit</button>
      </form>
    );
  }
})
