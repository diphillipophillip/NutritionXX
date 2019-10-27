import React from 'react'
import { login } from '../actions/login'
import { connect } from 'react-redux'
import { allPosts } from '../actions/allPosts'


class Login extends React.Component {


    componentDidMount() {
        this.props.allPosts()
    }

    renderPosts = () => {
        if (this.props.post.all !== undefined) {
            return this.props.post.all.map(post => <p key={Math.random(1*10000)}>{post.user.username}: {post.post}</p>)
        }
    }


    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: '',
            password: '',
            isLoggedIn: false
        })
    }


        
    renderErrors = (props) => {
        console.log(this.props.user.current.errors)
        if (this.props.user.current.errors && this.props.user.current.errors !== undefined ) {
            return <p> {this.props.user.current.errors} </p>
            
        } 
    }





    render() {
        return (
            <div>
                {this.renderPosts()}
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='email' name='email' value={this.state.value} onChange={this.onChange} />
                    <input type='text' placeholder='password' name='password' value={this.state.value} onChange={this.onChange} />
                    <input type='submit' />
                </form>
                {this.renderErrors()}
            </div>
        )
    }


}


const mapStateToProps = state => ({ 
    user: state.user,
    post: state.post
     })

export default connect(mapStateToProps, {login, allPosts})(Login)