import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import mealsReducer from './mealsReducer'
import caloriesReducer from './caloriesReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    post: postsReducer,
    meal: mealsReducer,
    calorie: caloriesReducer
})



export default rootReducer