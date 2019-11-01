import React from 'react'



const ShowingMeal = props => {


    return (
        <div>
            <label>Date</label>
            <p>{props.text.date}</p>

            <ul>
            <label>Name</label>
            <li>{props.text.name}</li>

            <label>Total Calories</label>
            <li>{props.text.total_calories}</li>

            <label>Calories From Fat</label>
            <li>{props.text.calories_from_fat}</li>

            <label>Total Fat</label>
            <li>{props.text.total_fat}</li>

            <label>Saturated Fat</label>
            <li>{props.text.saturated_fat}</li>

            <label>Cholesterol</label>
            <li>{props.text.cholesterol}</li>

            <label>Sodium</label>
            <li>{props.text.sodium}</li>

            <label>Potassium</label>
            <li>{props.text.potassium}</li>

            <label>Total Carbohydrates</label>
            <li>{props.text.total_carbohydrates}</li>

            <label>Dietary Fiber</label>
            <li>{props.text.dietary_fiber}</li>

            <label>Sugars</label>
            <li>{props.text.sugars}</li>

            <label>Protein</label>
            <li>{props.text.protein}</li>

            </ul>
            
        </div>
    )


}


export default ShowingMeal