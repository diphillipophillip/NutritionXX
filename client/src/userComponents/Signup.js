import React from 'react' 
import { connect } from 'react-redux'
import { signup } from '../actions/signup'
import { allPosts } from '../actions/allPosts'


const initialState = {
    email: '',
    password: '',
    username: '',
    isLoggedIn: false
}



class Signup extends React.Component {



    componentDidMount() {
        this.props.allPosts()
    }

    constructor(props) {
        super(props) 
        this.state = {
            username: '',
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
        this.props.signup(this.state)
        this.setState(initialState)
    }

    
    renderErrors = (props) => {
        if (this.props.user.current.errors && this.props.user.current.errors !== undefined ) {
            const email = `Email ${this.props.user.current.errors.email}`
            const password = `Password ${this.props.user.current.errors.password[0]}`
            const username = `Username ${this.props.user.current.errors.username}`
            return <p> {email} {password} {username} </p>
            
        } 
    }

    renderPosts = () => {
        if (this.props.post.all !== undefined) {
            return this.props.post.all.map(post => <p key={Math.random(1*10000)}>{post.user.username}: {post.post} </p>)
        }
    }

   

    


    render() {
        return (
            <div>
                <div className='user-form'>
                    <div className='width-quarter'>
                        < h2 className='mb-3 font-weight-bold text-light' > SignUp Here </h2>
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group"> 
                                     <input type='text' className='form-control' placeholder='Username' name='username' value={this.state.value} onChange={this.onChange}/>
                                </div>

                                <div className='form-group' >
                                    <input type='email' className='form-control' placeholder='Email' name='email' value={this.state.value} onChange={this.onChange} />
                                </div> 

                                <div className='form-group' >
                                    <input type='password' className='form-control' placeholder='Password' name='password' value={this.state.value} onChange={this.onChange} />
                                </div>
                                <input type='submit' className='btn btn-outline-light font-weight-bold' />
               
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



export default connect(mapStateToProps, {signup, allPosts})(Signup)