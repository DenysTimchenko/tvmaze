export function episodesFetchDataSuccess(episodes){
    return {
        type: "EPISODES_FETCH_DATA_SUCCESS",
        episodes
    }
}

export function episodesFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(episodes => dispatch(episodesFetchDataSuccess(episodes)))
    }
}