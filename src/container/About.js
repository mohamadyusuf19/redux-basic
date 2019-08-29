import React, { Component } from "react";
import { connect } from "react-redux";
import { rubahNama } from "../redux/actions/changeActions";

class About extends Component {
  state = {
    name: "YUSUF"
  };
  render() {
    return (
      <div onClick={() => this.props.rubahNama(this.state.name)}>
        About {this.props.homeReducer.name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeReducer: state.homeReducers
  };
};

export default connect(
  mapStateToProps,
  { rubahNama }
)(About);
