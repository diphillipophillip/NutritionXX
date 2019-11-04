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
            <div className="container">
                <div className="text-center mt-3">
                    < NavLink to='/login'><button className="btn btn-outline-light" ><strong>Login</strong></button> </NavLink>
                    < NavLink to='/signup'><button className="btn btn-light">SignUp</button> </ NavLink>
                </div >
                <div className="width-half">
                    <div className="feed bg-light" >
                    {this.renderPosts()}
                    </div>
                </div>
            </div>
          
        )
    }


}


const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {allPosts})(Home)