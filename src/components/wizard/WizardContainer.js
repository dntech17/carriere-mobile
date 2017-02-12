import React, {Component} from 'react'

import WelcomePage from './WelcomePage'
import Footer from './Footer'

class WizardContainer extends Component {
  constructor(props) {
    super(props);
  }

  handlePrevious(){

  }

  handleNext(){

  }

  handleGoto(page){

  }

  render() {
    let {name, version} = this.props
    return (
      <div id='wizard-container'>

        <WelcomePage />
        <Footer />
      </div>
    )
  }

}

WizardContainer.propTypes = {
  name: React.PropTypes.string.isRequired,
  version: React.PropTypes.string.isRequired,
}

export default WizardContainer
