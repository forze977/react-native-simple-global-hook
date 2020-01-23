import React, { createContext, useReducer } from "react"

export const GlobalContext = createContext({})

const initialState = {
  global: 'test'
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'update':
			return {
				...state, global: action.payload
			}
  }
}

export const GlobalProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    initialState
  )

  const { global } = globalState

  const update = payload => globalDispatch({ type: 'update', payload })

  return (
    <GlobalContext.Provider value={{ global, update }}>
      {children}
    </GlobalContext.Provider>
  )
}