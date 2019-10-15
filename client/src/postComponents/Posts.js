import React from 'react' 



class Posts extends React.Component {


    componentDidMount() {
        this.props.allPosts()
    }

    renderPosts = () => {
        if (this.props.showPosts.all !== undefined && this.props.showPosts.all.length !== 0) {
            return this.props.showPosts.all.map(post => <p key={Math.random(1*100000)}>{post.user.username}: {post.post}</p>)
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