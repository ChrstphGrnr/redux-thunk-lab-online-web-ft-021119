export function fetchCats() {
    return dispatch => {
        dispatch({type: 'LOADING_CATS'})
        return fetch('http://localhost:4000/db')
            .then(resp => {return resp.json()})
            .then(json => {dispatch({type: 'FETCH_CATS', payload: json.images})
        });
    }

}