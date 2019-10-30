import React from 'react'
import { allMeals } from '../actions/allMeals'
import { connect } from 'react-redux'

const ViewAllMeals = props => {


    const onClick = () => {
        props.allMeals(props.user)
    }


    return (
        <div>
        <button onClick={onClick}>View All Meals</button>
        
        </div>
    
    )

    


}

export default connect(null, { allMeals})(ViewAllMeals)