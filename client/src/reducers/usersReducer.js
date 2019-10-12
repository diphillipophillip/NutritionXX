export default function usersReducer (state = {current: [], errors: [], isLoggedIn: false }, action) {
    switch(action.type) {

        case 'POST_SIGN_UP':
            console.log('Post Signup')

        case 'SIGN_UP':
            
            if (action.payload !== undefined && !action.payload.errors) {
            return { ...state, current: action.payload, isLoggedIn: true }
            } else {
                return { ...state, errors: action.paylaod }
            }


        default: 
            return state 
    }
}