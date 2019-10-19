import React from 'react'
import { searchCals } from '../actions/searchCals'
import { connect } from 'react-redux'

class SearchCalories extends React.Component {


    constructor() {
        super() 
        this.state = {
            input: ''
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
        
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.searchCals(this.state)
        this.setState = ({
            input: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name='input' value={this.state.value} onChange={this.onChange} placeholder='Find Calories'/>
                <input type='submit' />
                </form>
            </div>
        )
    }



}


export default connect(null, {searchCals})(SearchCalories)