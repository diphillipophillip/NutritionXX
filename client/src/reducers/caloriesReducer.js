export default function caloriesReducer ( state = {current: [], isLoggedIn: false}, action ) {
    switch(action.type) {

        case 'POST_SEARCH':
            console.log('Post Search')

        case 'GET_CALORIES':
            return { ...state, current: action.payload }

        default: 
            return state 




    }
}