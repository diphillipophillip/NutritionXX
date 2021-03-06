import React from 'react'
import moment from 'moment'
import { saveMeal } from '../actions/saveMeal'
import { connect } from 'react-redux'

const Meal = props => {


    let names = props.text.food_names 
    let newNames = names.join( ' and ')

    let date = props.text.date
    const newDate = moment(new Date, date).format('MMMM Do YYYY, h:mm:ss a')

    const onClick = () => {
        var data = props.text
        var string = JSON.stringify(data)
        props.saveMeal(string)
    }

    const saved = () => {
        if (props.meal.saved.length > 0) {
            return <p>{props.meal.saved}</p>
        }
    }

    return (

        
        <div>

        <label>Date</label>
        <h5>{newDate}</h5>
      

        <ul>
        <label>Name</label>
        <li>{newNames}</li>
        
        <label>Total Calories</label>
        <li>{props.text.nf_calories}</li>
        
        <label>Calories from Fat</label>
        <li>{props.text.nf_total_fat * 9}</li>

        <label>Total Fat</label>
        <li>{props.text.nf_total_fat}</li>

        <label>Saturated Fat</label>
        <li>{props.text.nf_saturated_fat}</li>

        <label>Cholesterol</label>
        <li>{props.text.nf_cholesterol}</li>
        
        <label>Sodium</label>
        <li>{props.text.nf_sodium}</li>

        <label>Potassium</label>
        <li>{props.text.nf_potassium}</li>

        <label>Total Carbohydrates</label>
        <li>{props.text.nf_total_carbohydrate}</li>

        <label>Dietary Fiber</label>
        <li>{props.text.nf_dietary_fiber}</li>

        <label>Sugars</label>
        <li>{props.text.nf_sugars}</li>

        <label>Protein</label>
        <li>{props.text.nf_protein}</li>

        </ul>

        <button onClick={onClick}>Save</button>

        {saved()}

        </div> 
        
       
    )


}


const mapStateToProps = state => ({
    meal: state.meal
})

export default connect(mapStateToProps, {saveMeal})(Meal)