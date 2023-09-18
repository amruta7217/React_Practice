import React, {createContext, useContext} from "react"

const CounterContext = createContext()

export const CountContextProvider = ({count, setCounter, children}) => (
    <CounterContext.Provider value={{count, setCounter}}>
        {children}
    </CounterContext.Provider>
)

export const useCountContext = () => useContext(CounterContext)