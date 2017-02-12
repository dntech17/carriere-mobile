import React, {Component, PropTypes} from 'react'
import { FormattedMessage } from 'react-intl'


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {version} = this.props
    return (
      <header>
        <div className='header-title'>
          <h1>
            <FormattedMessage
              id='app.name'
              defaultMessage='Carriere'/>
          </h1>
          <span>Version:{version}</span>
        </div>
      </header>
    )
  }

}

Header.propTypes = {
  version: React.PropTypes.string.isRequired,
}

export default Header
