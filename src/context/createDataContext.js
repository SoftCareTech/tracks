import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext()
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)
        // action === { addBlogPost:(dispatch)=>{return ()=>{}}} 
        console.log(actions)
        const boundActions = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
            console.log(key)
        }

        return <Context.Provider
            value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}















