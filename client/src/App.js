import React from 'react';
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import PostContainer from './containers/PostContainer'
import { allPosts } from './actions/allPosts'
import DisplayMeal from './containers/DisplayMeal'

class App extends React.Component {




  
  renderDash = () => {
    if (this.props.user.isLoggedIn === true ) {
      return < Redirect to='/dashboard' />
    } 
  }




  render() {
    return (
      <div>
        {this.renderDash()}
        < PostContainer allPosts={this.props.allPosts} showPosts={this.props.post}/>
        < DisplayMeal />
      </div>
    )
  }


}



const mapStateToProps = state => ({ 
  user: state.user,
  post: state.post
 })

export default connect(mapStateToProps, {allPosts})(App);
