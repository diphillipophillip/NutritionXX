import React from 'react'
import Navbar from '../userComponents/Navbar'
import AddPost from '../postComponents/AddPost'
import { connect } from 'react-redux'
import MealContainer from './MealContainer'
import CalorieContainer from './CalorieContainer'
import {allPosts} from '../actions/allPosts'
import ViewAllMeals from '../mealComponents/ViewAllMeals'

class Dashboard extends React.Component {


    componentDidMount() {
        this.props.allPosts()
    }

    renderPosts = () => {
        if (this.props.post.all !== undefined) {
            return this.props.post.all.map(post => <p key={Math.random(1*1000)}>{post.user.username}: {post.post} </p>)
        }
    }

    

    render() {
        return (
            <div>
                < Navbar />
                < AddPost user={this.props.user} />
                < MealContainer />
                < CalorieContainer />
                < ViewAllMeals user={this.props.user.current.id}/>
            </div>
        )
    }


}

const mapStateToProps = state => ({ 
    user: state.user,
    post: state.post
 })

export default connect(mapStateToProps, {allPosts})(Dashboard) 