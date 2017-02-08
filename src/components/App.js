import React, {Component} from 'react'

import WizardContainer from './WizardContainer'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='app'>
        <WizardContainer name='Carriere' version='1.0.0' />
      </div>
    )
  }

}
