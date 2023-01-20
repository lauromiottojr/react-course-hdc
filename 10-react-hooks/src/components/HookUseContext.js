import { createContext } from 'react'

export const SomeContext = createContext()

export const HookUseContext = ({ children }) => {
    const contextValue = 'teste de context'
    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    )
}