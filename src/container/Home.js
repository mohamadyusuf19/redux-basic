import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>Home {this.props.homeReducer.name}</div>;
  }
}

const mapStateToProps = state => {
  return {
    homeReducer: state.homeReducers
  };
};

export default connect(mapStateToProps)(Home);
