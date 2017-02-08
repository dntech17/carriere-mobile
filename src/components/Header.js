import React, {Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {name, version} = this.props
    console.log(name);
    return (
      <header>
        <div className='header-title'>
          <h3>{name}</h3>
          <span>Version:{version}</span>
        </div>
        <div className='header-breadcrum'>
          <span>Step 1 of 12</span>
        </div>
      </header>
    )
  }

}

Header.propTypes = {
  name: React.PropTypes.string.isRequired,
  version: React.PropTypes.string.isRequired,
}

export default Header
