export default function usersReducer (state = {current: [], isLoggedIn: false }, action) {
    switch(action.type) {

        case 'POST_SIGN_UP':
            console.log('Post Signup')

        case 'SIGN_UP':
            console.log(action.payload)
            return { ...state, current: action.payload, isLoggedIn: true }


        default: 
            return state 
    }
}