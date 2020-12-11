export function episodes (state = [], action) {
    switch (action.type) {
        case "EPISODES_FETCH_DATA_SUCCESS":
            return action.episodes
        default:
            return state;
    }
}