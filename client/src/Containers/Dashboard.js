import React from 'react'
import Navbar from '../userComponents/Navbar'
import AddPost from '../postComponents/AddPost'
import { connect } from 'react-redux'
import MealContainer from './MealContainer'
import CalorieContainer from './CalorieContainer'

class Dashboard extends React.Component {

    

    render() {
        return (
            <div>
                < Navbar />
                < AddPost user={this.props.user} />
                < MealContainer />
                < CalorieContainer />
            </div>
        )
    }


}

const mapStateToProps = state => ({ 
    user: state.user,
    post: state.post
 })

export default connect(mapStateToProps)(Dashboard) 