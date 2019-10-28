import React from 'react'
import { connect } from 'react-redux'
import Meal from '../mealComponents/Meal'


class DisplayMeal extends React.Component {

    
    createMeal = () => {
        
        let fakeState = {}

        if (this.props.meal.current.foods) {
        let names = this.props.meal.current.foods.map(item => {
            return item.food_name
        })

        let consumedAt = this.props.meal.current.foods.map(item => {
            return item.consumed_at
        })

        fakeState['food_names'] = names 
        fakeState['consumed_at'] = consumedAt[0]
        fakeState['date'] = consumedAt[0]
        fakeState['user_id'] = this.props.user.current.id
        console.log(fakeState)

        if (this.props.meal.current.foods[0]) {
            Object.keys(this.props.meal.current.foods[0]).map((item) => {
               return fakeState[item] = 0
            })
        }

        this.props.meal.current.foods.map(item => {
            for (let [key, value] of Object.entries(item)) {
                if (!isNaN(value) ) {
                   fakeState[key] += value 
                  
                } 
            } 
        })


        if (this.props.meal.current.foods[0]) {
            return <Meal key={Math.random(1*10)} text={fakeState} />
            
            }


        }

    }




    render() {
        return (
            <div>
                {this.createMeal()}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    meal: state.meal,
    user: state.user
})


export default connect(mapStateToProps)(DisplayMeal)