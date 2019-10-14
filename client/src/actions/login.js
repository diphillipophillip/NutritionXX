export const login = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_LOGIN'})
        return fetch(`http://localhost:3000/login?email=${props.email}&password=${props.password}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'LOGIN', payload: data}))
    }
}