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

   ifError = () => {
       if (this.props.errors) {
           
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
            </div>
        )
    }


}


const mapStateToProps = state => ({ user: state.user })



export default connect(mapStateToProps, {signup})(Signup)