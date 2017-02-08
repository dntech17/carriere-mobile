import React, {Component} from 'react'

class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-container'>
        <p>This is where your widzard starts</p>
      </div>
    )
  }

}

WelcomePage.propTypes = {

}

export default WelcomePage
