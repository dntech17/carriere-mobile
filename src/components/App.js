import React, {Component, PropTypes} from 'react'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='app' className='container'>
          <Header version='1.0.0' />
          {this.props.children}
      </div>
    )
  }

}

App.propTypes = {
  children: PropTypes.any
}

export default App
