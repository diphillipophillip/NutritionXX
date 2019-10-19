export const searchCals = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_SEARCH'})
        return fetch(`http://localhost:3000/findcalories?input=${props.input}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'GET_CALORIES', payload: data }))
    }
}