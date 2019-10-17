export default function mealsReducer ( state = { current: [], isLoggedIn: false }, action ) {

    switch(action.type) {

        case 'POST_SEARCH':
            console.log('Post Search')

        case 'SEARCH_RESULTS':
            if (action.payload !== undefined) {
            return {...state, current: action.payload }
            }
        


        default:
            return state 


    }





}