import React, {Component} from 'react'


/* post 显示组件 */
class Post extends Component{

    constructor(props){
        super(props)
        console.log("hello world")
        console.log(this.props)
    }

    render(){
        return (
            <div>  
                hello
                {this.props}
            </div>
        )
    }
}

export default Post;