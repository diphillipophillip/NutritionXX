import React from 'react'



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
           user: this.props.user.current.id
       })
       console.log(this.state)
   }

   

    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Add Post' name='post' value={this.state.value} onChange={this.onChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }


}


export default AddPost