export const showMeal = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_SHOW' })
        return fetch(`http://localhost:3000/show?id=${props}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}