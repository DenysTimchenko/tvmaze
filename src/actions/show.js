export function showFetchDataSuccess(show){
    return {
        type: "SHOW_FETCH_DATA_SUCCESS",
        show
    }
}

export function showFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(show => dispatch(showFetchDataSuccess(show)))
    }
}