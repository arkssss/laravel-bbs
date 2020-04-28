import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  PostDetailWrapper,
  UserInformation,
}from './style'
import { actionCreator } from './store';

class PostDetail extends Component{

  constructor(props) {
    super(props);
    this.post_id = this.props.match.params.id;
    this.getPostDetail = this.props.getPostDetail;
  }
    render(){
      const { post } = this.props;
        return (
          <PostDetailWrapper>
            <UserInformation>
              {post.get('user').get('name')}
            </UserInformation>
            <div>{post.get('body')}</div>
          </PostDetailWrapper>
        )
    }

    componentDidMount() {

      this.getPostDetail(this.post_id);

    }

}

const mapStateToProps = (state) =>{

  return{
    'post' : state.get('postDetail').get('post'),
  }

};

const mapDispatchToProps = (dispatch)=>{
    return{
      getPostDetail(id){
          const action = actionCreator.getPostDetail(id);
          dispatch(action);
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
