// write code for Welcome component here
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Welcome = ({ name }) => {
    let say = `Hey${name}!`;
    let greetingMessage = "Welcome to Newton School.";
    return (
        <div>
            <h1>{say}</h1>
            <h2>{greetingMessage}</h2>
      </div>
    )
  }

export default Welcome