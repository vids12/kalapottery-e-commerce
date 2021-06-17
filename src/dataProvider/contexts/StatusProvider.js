import { createContext, useContext, useReducer } from "react";
import { statusReducer } from "../reducers/statusReducer";

const StatusContext = createContext();

export function StatusProvider({ children }) {
    const [state, dispatch] = useReducer(statusReducer, {
        status: 'idle',
        error: null
    })

    return <StatusContext.Provider value={{status: state.status,error: state.error,dispatch}}>
        {children}
    </StatusContext.Provider>
}

export function useStatus() {
    return useContext(StatusContext);
}