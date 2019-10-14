import React from 'react' 
import { connect } from 'react-redux'
import { signup } from '../actions/signup'


const initialState = {
    email: '',
    password: '',
    username: '',
    isLoggedIn: false
}



class Signup extends React.Component {

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
        console.log(this.props.user.current.errors)
        if (this.props.user.current.errors && this.props.user.current.errors !== undefined ) {
            const email = `Email ${this.props.user.current.errors.email}`
            const password = `Password ${this.props.user.current.errors.password[0]}`
            const username = `Username ${this.props.user.current.errors.username}`
            return <p> {email} {password} {username} </p>
            
        } 
    }

   

    


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                <input type='text' placeholder='Username' name='username' value={this.state.value} onChange={this.onChange}/>
                <input type='text' placeholder='Email' name='email' value={this.state.value} onChange={this.onChange} />
                <input type='text' placeholder='Password' name='password' value={this.state.value} onChange={this.onChange} />
                <input type='submit' />
                </form>
                {this.renderErrors()}
            </div>
        )
    }


}


const mapStateToProps = state => ({ user: state.user })



export default connect(mapStateToProps, {signup})(Signup)