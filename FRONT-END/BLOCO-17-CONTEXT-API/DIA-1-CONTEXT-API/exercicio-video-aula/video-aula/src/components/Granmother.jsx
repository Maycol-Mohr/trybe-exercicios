import React, { Component } from 'react'
import Father from './Father'

class Granmother extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a vó!!</h2>
        <Father />
      </div>
    )
  }
}

export default Granmother