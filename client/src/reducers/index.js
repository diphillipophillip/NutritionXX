import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import mealsReducer from './mealsReducer'

const rootReducer = combineReducers({
    user: usersReducer,
    post: postsReducer,
    meal: mealsReducer
})



export default rootReducer