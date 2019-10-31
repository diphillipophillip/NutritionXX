import React from 'react'
import Navbar from '../userComponents/Navbar'
import AddPost from '../postComponents/AddPost'
import { connect } from 'react-redux'
import MealContainer from './MealContainer'
import CalorieContainer from './CalorieContainer'
import {allPosts} from '../actions/allPosts'
import ViewAllMeals from '../mealComponents/ViewAllMeals'
import ShowMeal from '../mealComponents/ShowMeal'





class Dashboard extends React.Component {


    componentDidMount() {
        this.props.allPosts()
    }

    renderPosts = () => {
        if (this.props.post.all !== undefined) {
            return this.props.post.all.map(post => <p key={Math.random(1*1000)}>{post.user.username}: {post.post} </p>)
        }

    }

    renderMeals = () => {
        if (this.props.meal.all !== undefined ) {
            return this.props.meal.all.map( meal => <ShowMeal key={Math.random(1*1000)} text={meal} id={meal.id} />)
        }
    }

   


 
    render() {
        return (
            <div>
                {this.renderMeals()}
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
    post: state.post,
    meal: state.meal
 })

export default connect(mapStateToProps, {allPosts})(Dashboard) 