import React from 'react'
import Posts from '../postComponents/Posts' 


class PostContainer extends React.Component {



    render() {
        return (
            <div>
                <Posts current={this.props.current} />
            </div>
        )
    }



}


export default PostContainer 