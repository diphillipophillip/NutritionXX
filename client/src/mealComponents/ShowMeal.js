import React from 'react'
import { connect } from 'react-redux'
import {showMeal} from '../actions/showMeal'




const ShowMeal = props => {

    const onClick = (id) => {
        props.showMeal(id)
    }


    return (
           <p onClick={() => onClick(props.id)}>{props.text.date}</p>
    )

}


export default connect(null, {showMeal})(ShowMeal)