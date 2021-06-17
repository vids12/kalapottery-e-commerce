export function statusReducer(state,action) {
    switch (action.type) {
        case "STARTED":
            return { ...state, status: 'pending' };
        case "RESOLVED":
            return { ...state, status: 'resolved' };
        case "ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};