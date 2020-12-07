export function show (state = [], action) {
    switch (action.type) {
        case "SHOW_FETCH_DATA_SUCCESS":
            return action.show
        default:
            return state;
    }
}