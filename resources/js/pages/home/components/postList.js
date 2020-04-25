import React, {Component, Fragment} from "react";
import {Avatar, List, Button} from "antd";
import 'antd/dist/antd.css';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import {actionCreator} from "../store";
import {connect} from "react-redux";

import {
  ListCategory,
  CategoryItem,
  ListContent,
  ListOrder,
  ListOrderItem,
} from "../style"


class PostList extends Component{

  getListCategory(listCategory){
    return(
      listCategory.map((item)=>{
        console.log({item});
        return (
          <CategoryItem
            key={item.get('name')}
            onClick={() => this.props.handlerPostCategoryClick(item.get('id'))}
          >
            {item.get('name')}
          </CategoryItem>
        )
      })
    )
  }

  render() {

    const { listCategory, buttonStatus, handleOrderButtonClick, current_category }  = this.props;
    /* Icon */
    const IconText = ({ icon, text }) => (
      <span>
          {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
          </span>
    );

    return (
      <Fragment>
      <ListCategory>
        {this.getListCategory(listCategory)}
        <ListOrder>
          <Button
            className='buttonOrder'
            type= {buttonStatus === 'updated_at'? 'primary' : ''}
            onClick={()=>handleOrderButtonClick('updated_at', current_category)}
          >
            最后回复
          </Button>
          <Button
            className='buttonOrder'
            type= {buttonStatus === 'created_at'? 'primary' : ''}
            onClick={()=>handleOrderButtonClick('created_at', current_category)}
          >
            最新发布
          </Button>
        </ListOrder>
      </ListCategory>
      <ListContent>
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6,
        }}
        dataSource={this.props.list}
        renderItem={item => (
          <List.Item
            key={item.get('title')}
            actions={[
              <IconText icon={MessageOutlined} text={item.get('cat_name')} key="list-vertical-star-o" />,
              <IconText icon={StarOutlined} text={item.get('view_count')} key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text={item.get('reply_count')} key="list-vertical-like-o" />,
              <IconText icon={LikeOutlined} text={item.get('updated_at')} key="list-vertical-like-o" />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.get('avatar')} />}
              title={<a href={item.get('href')}>{item.get('title')}</a>}
              description={item.get('description')}
            />
          </List.Item>
        )}
      />
      </ListContent>
      </Fragment>
    )

  }

  // /* ajax */
  componentDidMount() {
    this.props.handlerInitHomepost();
    this.props.handlerInitPostCategory();
  }

}


const mapStateToProps = (state)=>{
  return {
    'list' : state.get('homepost').get('list'),
    'listCategory' : state.get('homepost').get('listCategory'),
    'buttonStatus' : state.get('homepost').get('buttonStatus'),
    'current_category' : state.get('homepost').get('current_category'),
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    handlerInitHomepost(){
      const action = actionCreator.getInitHomepostListCreator();
      dispatch(action)
    },
    handlerInitPostCategory(){
      dispatch(actionCreator.getInitPostCategory());
    },
    handlerPostCategoryClick(category_id){
      dispatch(actionCreator.getPostsByCategory(category_id));
    },
    handleOrderButtonClick(button_key, current_category){
      dispatch(actionCreator.buttonStatusChange(button_key, current_category));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
