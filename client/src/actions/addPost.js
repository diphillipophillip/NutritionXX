export const addPost = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_ADD'})
        return fetch(`http://localhost:3000/addpost?post=${props.post}&user_id=${props.user_id}`)
        .then(res => res.json())
        .then(data => dispatch({ type: 'ADD_POST', payload: data }))
    }

}