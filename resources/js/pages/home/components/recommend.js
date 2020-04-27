import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Recommend extends Component{

  render() {

    return (
      <Link to={'/write'}>写作</Link>
    )
  }

  // /* ajax */
  componentDidMount() {
  }

}

const mapStateToProps = (state)=>{
};

const mapDispatchToProps = (dispatch)=>{
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
