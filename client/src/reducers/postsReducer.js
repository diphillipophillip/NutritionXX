export default function postsReducer (state = { current: [], all: [], isLoggedIn: false }, action ) {

    switch(action.type) {
        case 'POST_ADD':
            console.log('Post Add')

        case 'ADD_POST':
            
            if (action.payload !== undefined ) {
            return {...state,  current: action.payload, isLoggedIn: true }
            }

        case 'POST_ALL': 
            console.log('hi')

        case 'ALL_POSTS':
            
            if ( action.payload !== undefined ) {
            return {...state, all: action.payload}
            }
            

        default: 
            return state 
    }




}