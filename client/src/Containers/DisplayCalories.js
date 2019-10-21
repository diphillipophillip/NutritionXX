import React from 'react'
import { connect } from 'react-redux'
import Calorie from '../calorieComponents/Calorie'


class DisplayCalories extends React.Component {


    renderCalories = () => {
        if (this.props.calorie.current !== undefined && this.props.calorie.current.length !== 0) {
            let cals = this.props.calorie.current.exercises[0]
                return < Calorie key={Math.random(1*100)} text={cals.nf_calories} />
        }
    }


    render() {
        return (
            <div>
                {this.renderCalories()}
            </div>
        )
    }


}


const mapStatetoProps = state => ({
    calorie: state.calorie 
})


export default connect(mapStatetoProps)(DisplayCalories)