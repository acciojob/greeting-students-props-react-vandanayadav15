// write code for Welcome component here
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Welcome = ({ name }) => {
    let say = `Hey${name}!`;
    let greetingMessage=`Welcome to AccioJob ${name} `
  render() {
    return (
      <div>Welcome</div>
    )
  }
}

export default Welcome