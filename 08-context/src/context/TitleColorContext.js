import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {

}

export const TitleColorContextProvider = ({ children }) => {

    // { color: "purple" } initial state - titleColorReducer alter state
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })

    return (
        <TitleColorContext.Provider value={{ ...state }}>{children}</TitleColorContext.Provider>
    )
}