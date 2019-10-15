import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/addPost'

class AddPost extends React.Component {


   constructor(props) {
       super(props)
       this.state = {
           post: ''
       }
   }

   onChange = event => {
       this.setState({
           [event.target.name]: event.target.value,
           user_id: this.props.user.current.id
       })
   }

   onSubmit = event => {
       event.preventDefault()
       this.props.addPost(this.state)
       this.setState({
           post: ''
       })
   }

   

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Add Post' name='post' value={this.state.value} onChange={this.onChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }


}


export default connect(null, {addPost})(AddPost)