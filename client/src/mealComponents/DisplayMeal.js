import React from 'react'
import { connect } from 'react-redux'


class DisplayMeal extends React.Component {


    displayMeal = () => {
        if (this.props.meal.current.length !== 0) {
        const meal = this.props.meal.current.foods[0]
        console.log(meal.food_name)
        }
    }


    render() {
        return (
            <div>
                {this.displayMeal()}
            </div>
        )
    }



}


const mapStateToProps = state => ({
    meal: state.meal
})

export default connect(mapStateToProps)(DisplayMeal)