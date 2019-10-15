export const allPosts = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_ALL' })
        return fetch(`http://localhost:3000/posts`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'SHOW_ALL_POSTS', payload: data }))
    }
}