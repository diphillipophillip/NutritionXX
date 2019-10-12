export const signup = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_SIGN_UP'})
        return fetch(`http://localhost:3000/register?email=${props.email}&password=${props.password}&username=${props.username}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'SIGN_UP', payload: data }))

    }
}