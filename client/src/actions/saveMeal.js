export const saveMeal = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_SAVE '})
        return fetch(`http://localhost:3000/save?data=${props}&user=${props.user}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'SAVE', payload: data }))
    }
}