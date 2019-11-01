export default function mealsReducer ( state = { current: [], saved: [], all: [], show: [], isLoggedIn: false }, action ) {

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
            
            if (action.payload) {
                return {...state, all: action.payload}
            }

        case 'POST_SHOW':
            console.log('Post Show')

        case 'SHOW': 
            if (action.payload) {
                return {...state, show: action.payload}
            }

    

        default:
            return state 


    }





}