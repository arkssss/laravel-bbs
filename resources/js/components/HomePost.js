import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { List, Avatar } from 'antd';
import 'antd/dist/antd.css';
import  axios from 'axios'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

/* 首页 Post 显示 */
export default class HomePost extends Component{

    constructor(props){
        super(props);
        this.state = {
          'list' : [
            {
              cat_des: "开发技巧、推荐扩展包等",
              cat_name: "教程",
              created_at: "2017-05-20 10:15:17",
              reply_count: 0,
              title: "Iure error sed ut porro officiis nostrum molestias.",
              updated_at: "2019-11-11 12:41:27",
              user_avatar: null,
              user_name: "Ms. Kiera Toy I",
              view_count: 0
            },
          ]
        }
    }

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
              pageSize: 3,
            }}
            dataSource={this.state.list}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
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

    /* ajax */
    componentDidMount() {
        axios.get('/posts').then((res)=>{

          console.log(res.data.data);
          this.setState(()=>({
            'list' : res.data.data
          }))

        }).catch(() =>{

          console.log('error');

        })

    }
}


if (document.getElementById('HomePosts')) {
    ReactDOM.render(<HomePost />, document.getElementById('HomePosts'));
  }
