export const allPosts = (props) => {
    return dispatch => {
        dispatch({ type: 'POST_ALL'})
        return fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(data => dispatch({ type: 'ALL_POSTS', payload: data }))
    }

}