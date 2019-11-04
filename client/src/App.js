import React from 'react';
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import PostContainer from './containers/PostContainer'
import DisplayMeal from './containers/DisplayMeal'
import DisplayCalories from './containers/DisplayCalories'

class App extends React.Component {

  
  renderDash = () => {
    if (this.props.user.isLoggedIn === true ) {
      return < Redirect to='/dashboard' />
    } else {
      return < Redirect to='/' />
    }
  }




  render() {
    return (
      <div >
        <div className="nav">
            <img className="logo" src="logo.png" />
        </div>
        {this.renderDash()}
        < PostContainer current={this.props.post.current} />
        < DisplayMeal />
        < DisplayCalories />
        
      </div>
    )
  }


}



const mapStateToProps = state => ({ 
  user: state.user,
  post: state.post
 })

export default connect(mapStateToProps)(App);
