import React, {Component} from "react";
import {connect} from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { actionCreator } from './store';
import {
  Title,
  WriteWrapper,
  PostTitle,
  PostCategory,
}from './style'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

class WritePost extends Component{

  getMenuItem(postCategory){
    return(
        postCategory.map((item)=>{
          return(
            <Menu.Item
              key={item.get('name')}
              category_id={item.get('id')}
              onClick={() => this.props.handlerPostCategoryChange(item.get('id'))}
            >
              {item.get('name')}
            </Menu.Item>
          )
        })
    )
  }

  getMenu(postCategory){
    return (
      <Menu>
        {this.getMenuItem(postCategory)}
      </Menu>
    )
  }

  getDisplayCategoryName(post_category, selected_category_id){
    if(selected_category_id === ''){
      return (
        <span>请选择分类</span>
      )
    }else{
      return (
        post_category.map((item)=>{
          if (item.get('id') === selected_category_id){
            return (
              <span>
                {item.get('name')}
              </span>
            )
          }
        })
      )
    }
  }

  render() {

    const {
      post_category, quill_value, handleQuillChange,
      title_value, selected_category_id, handlerPostTitleChange,
    } = this.props;
    const handlerFormSubmit = this.props.handlerFormSubmit.bind(this);

    return (
      <WriteWrapper>
        <Title>新建话题</Title>
        <PostTitle onChange={(e) => handlerPostTitleChange(e)} placeholder='请填写标题' name='title' value={title_value} />
        <PostCategory>
          <Dropdown
            className="dropdown"
            overlay={this.getMenu(post_category)}
          >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {this.getDisplayCategoryName(post_category, selected_category_id)} <DownOutlined />
            </a>
          </Dropdown>
        </PostCategory>
        <div className="text-editor">
          <ReactQuill theme="snow"
                      modules={modules}
                      formats={formats}
                      value={quill_value}
                      onChange={(val)=>handleQuillChange(val)}
          >
          </ReactQuill>
        </div>
        <Button
          onClick={() => handlerFormSubmit(title_value, selected_category_id, quill_value)}
        >提交</Button>
      </WriteWrapper>
    );
  }

  componentDidMount() {

    this.props.handlerGetInitPostCategory();

  }
}

const mapStateToProps = (state)=>{

  return {
    'post_category': state.get('writePost').get('post_category'),
    'quill_value': state.get('writePost').get('quill_value'),
    'selected_category_id': state.get('writePost').get('selected_category_id'),
    'title_value': state.get('writePost').get('title_value'),
  }

};

const mapDispatchToProps = (dispatch)=>{
  return{

    handlerGetInitPostCategory(){

      const action = actionCreator.getInitPostCategory();
      dispatch(action);

    },

    handleQuillChange(val){

      const action = actionCreator.changeQuilValue(val);
      dispatch(action);

    },

    handlerPostTitleChange(e){

      const val = e.target.value;
      const action = actionCreator.postTitleInputChange(val);
      dispatch(action);

    },

    handlerPostCategoryChange(val){

      const action = actionCreator.postCategorySelected(val);
      dispatch(action);

    },

    handlerFormSubmit(post_title, post_category, post_content){

      const formData = {
        '_token' : $('meta[name="csrf-token"]').attr('content'),
        'title' : post_title,
        'category_id' : post_category,
        'body' : post_content,
      };
      actionCreator.postFormData(formData);
      this.props.history.push('/');
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);
