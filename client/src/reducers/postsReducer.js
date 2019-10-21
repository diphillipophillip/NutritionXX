export default function postsReducer (state = { current: [], all: [], isLoggedIn: false }, action ) {

    switch(action.type) {
        case 'POST_ADD':
            console.log('Post Add')

        
        case 'ADD_POST':
            return {...state,  current: action.payload, isLoggedIn: true}

        case 'POST_ALL':
            
            console.log('Getting All Posts')

        case 'SHOW_ALL_POSTS':
            console.log(action.payload)
            return { ...state, all: action.payload }


        default: 
            return state 
    }




}