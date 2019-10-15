import React from 'react';
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'


class App extends React.Component {

  
  renderDash = () => {
    if (this.props.user.isLoggedIn === true ) {
      return < Redirect to='/dashboard' />
    } 
    console.log(this.props)
  }


  render() {
    return (
      <div>
        {this.renderDash()}
      </div>
    )
  }


}



const mapStateToProps = state => ({ 
  user: state.user
 })

export default connect(mapStateToProps)(App);
