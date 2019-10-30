export default function mealsReducer ( state = { current: [], saved: [], isLoggedIn: false }, action ) {

    switch(action.type) {

        case 'POST_SEARCH':
            console.log('Post Search')

        case 'SEARCH_RESULTS':
            if (action.payload !== undefined) {
            return {...state, current: action.payload, isLoggedIn: true }
            }

        case 'POST_SAVE':
            console.log('Post Save')

        
        case 'SAVE': 
            if (action.payload) {
                return {...state, saved: "Your Meal has been successfully Saved!"}
            }
        
        case 'POST_ALL_MEALS': 
            console.log('Post All Meals')

        case 'ALL_MEALS':
            console.log(action.payload)


        default:
            return state 


    }





}