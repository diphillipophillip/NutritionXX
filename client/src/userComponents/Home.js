import React from 'react' 
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { allPosts } from '../actions/allPosts'

class Home extends React.Component {


    componentDidMount() {
        this.props.allPosts()
    }

    renderPosts = () => {
        if (this.props.post.all.length !== 0) {
            return this.props.post.all.map(post => <p key={Math.random(1*1000)}>{post.user.username}: {post.post} </p>)
        }
    }


    

    render() {
        return (
            <div>
            {this.renderPosts()}
            < NavLink to='/login'><button>Login</button> </NavLink>
            < NavLink to='/signup'><button>SignUp</button> </ NavLink>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {allPosts})(Home)