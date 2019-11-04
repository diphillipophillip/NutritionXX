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
                <div className="user-form">
                    <div className='width-quarter'>
                        < h2 className='mb-3 font-weight-bold text-light' > Login Here </h2>
                       
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                            <input type='email' className='form-control' placeholder='email' name='email' value={this.state.value} onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                            <input type='password' className='form-control' placeholder='password' name='password' value={this.state.value} onChange={this.onChange} />
                            </div>
                            <input type='submit' className='btn btn-outline-light font-weight-bold'/>
                        </form>
                    </div>
                </div>
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