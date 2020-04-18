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
              href: '/user/1',
              title: `ant design part 1`,
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
              content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            },
            {
              href: 'http://ant.design',
              title: `ant design part 2`,
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
              content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            },
            {
              href: 'http://ant.design',
              title: `ant design part 3`,
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
              content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        );
    }

    /* ajax */
    componentDidMount() {
        axios.get('/posts').then((res)=>{

          console.log(res);

        }).catch(() =>{

          console.log('error');

        })

    }
}


if (document.getElementById('HomePosts')) {
    ReactDOM.render(<HomePost />, document.getElementById('HomePosts'));
  }
