import React from 'react'
import Posts from '../postComponents/Posts' 


class PostContainer extends React.Component {



    render() {
        return (
            <div>
                <Posts allPosts={this.props.allPosts} showPosts={this.props.showPosts}/>
            </div>
        )
    }



}


export default PostContainer 