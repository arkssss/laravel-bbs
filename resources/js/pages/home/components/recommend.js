import React, {Component} from "react";
import {connect} from "react-redux";


class Recommend extends Component{

  render() {

    return (
      <div>Recommend</div>
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
