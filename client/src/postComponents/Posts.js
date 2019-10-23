import React from 'react' 



class Posts extends React.Component {



   renderPosts = () => {
       if (this.props.current.length > 0 && this.props.current !== undefined ) {
           return this.props.current.map(post => <p key={Math.random(1*100000)}>{post.user.username}: {post.post}</p>)
       }
   }

    
    render() {
        return (
            
            <div>
                {this.renderPosts()}
            </div>
        )
    }


}


export default Posts