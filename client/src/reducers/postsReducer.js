export default function postsReducer (state = { current: [], isLoggedIn: false }, action ) {

    switch(action.type) {
        case 'POST_ADD':
            console.log('Post Add')

        
        case 'ADD_POST':
            return {...state,  current: action.payload, isLoggedIn: true}


        default: 
            return state 
    }




}