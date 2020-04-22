import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import {actionCreator} from './store'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

/* 首页 Post 显示 */
class HomePost extends Component{

    render(){
        /* Icon */
        const IconText = ({ icon, text }) => (
          <span>
          {React.createElement(icon, { style: { marginRight: 8 } })}
          {text}
          </span>
        );

        return (
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
            footer={
              <div>
                <b>Ark Design</b>
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text={item.cat_name} key="list-vertical-star-o" />,
                  <IconText icon={StarOutlined} text={item.view_count} key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text={item.reply_count} key="list-vertical-like-o" />,
                  <IconText icon={LikeOutlined} text={item.updated_at} key="list-vertical-like-o" />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        );
    }


    // /* ajax */
    componentDidMount() {

      this.props.handlerInitHomepost()

    }
}


const mapStateToProps = (state)=>{

  return ({

    'list' : state.homepost.list

  })

};


const mapDispatchToProps = (dispatch)=>{
  return {
    handlerInitHomepost(){
      const action = actionCreator.getInitHomepostListCreator();
      dispatch(action)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePost);
