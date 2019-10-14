export default function usersReducer (state = {current: [], isLoggedIn: false }, action) {
    switch(action.type) {

        case 'POST_SIGN_UP':
            console.log('Post Signup')

        case 'SIGN_UP':
            
            if (action.payload !== undefined && !action.payload.errors) {
            return { ...state, current: action.payload, isLoggedIn: true }
            } else if (action.payload !== undefined && action.payload.errors) {
                return {...state, current: action.payload, isLoggedIn: false }
            }

        case 'POST_LOGIN':
            console.log('Post Login')


        case 'LOGIN':
            if (action.payload !== undefined && !action.payload.errors) {
                return {...state, current: action.payload, isLoggedIn: true}
            } else if (action.payload !== undefined && action.payload.errors) {
                return {...state, current: action.payload, isLoggedIn: false}
            }

        default: 
            return state 
    }
}