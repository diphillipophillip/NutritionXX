export const allMeals = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_ALL_MEALS'})
        return fetch(`http://localhost:3000/all?user_id=${props}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'ALL_MEALS', payload: data}))
    }

}