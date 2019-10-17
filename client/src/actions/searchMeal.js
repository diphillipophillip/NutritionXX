export const searchMeal = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_SEARCH'})
        return fetch(`http://localhost:3000/searchmeal?input=${props.input}`)
        .then(resp => resp.json())
        .then(data => dispatch({type: 'SEARCH_RESULTS', payload: data }))
    }


}