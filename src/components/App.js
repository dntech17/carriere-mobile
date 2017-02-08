import React, {Component} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name} = this.props
    return (
      <div id="app">
        <h3>React is up and Running</h3>
        <p>{name} is happy to have you on board!</p>
      </div>
    )
  }

}