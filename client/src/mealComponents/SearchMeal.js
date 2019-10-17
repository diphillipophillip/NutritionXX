import React from 'react'
import { searchMeal } from '../actions/searchMeal'
import { connect } from 'react-redux'

class SearchMeal extends React.Component {


    constructor(props) {
        super(props) 
        this.state = {
            input: ''
        }
    }


    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.searchMeal(this.state)
        this.setState({
            input: ''
        })
    }


    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder="Search Meal" name='input' value={this.state.value} onChange={this.onChange} />
                    <input type='submit' />
                </form>
               
            </div>

        )
    }

}


const mapStateToProps = state => ({ 
    user: state.user,
    post: state.post,
    meal: state.meal
   })

export default connect(mapStateToProps, {searchMeal})(SearchMeal)