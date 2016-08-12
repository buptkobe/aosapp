import React, { Component, PropTypes } from 'react'
import Grid from '../Grid'


class Home extends Component {
  render() {
    return (
      <Grid navigator={this.props.navigator} />
    )
  }
}

Home.propTypes = {
  setNavStyles: PropTypes.func,
  navigator: PropTypes.object
}

export default Home
