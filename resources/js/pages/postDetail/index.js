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
    this.clearPostDetail = this.props.clearPostDetail;
  }
    render(){
      const { post } = this.props;
      console.log(post);
      const user_name = post.get('user').get('name');
      const body = post.get('body');

        return (
          <PostDetailWrapper>
            <UserInformation>
              {user_name}
            </UserInformation>
            <div
              dangerouslySetInnerHTML={{__html:body}}
            >
            </div>
          </PostDetailWrapper>
        )
    }

    /* 已经挂载 */
    componentDidMount() {

      this.getPostDetail(this.post_id);

    }

    /* 解除挂载 */
    componentWillUnmount() {

      this.clearPostDetail();

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
      },

      clearPostDetail(){
         const action = actionCreator.clearPostDetail();
         dispatch(action);
      },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
