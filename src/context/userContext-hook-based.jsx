import React, { useState, createContext } from 'react'

let UserContext = createContext()
let { Provider } = UserContext

function UserProvider(props) {
     let [user, setUser] = useState(null)

    function login() {
        setUser({
            name: 'Juan'
        })
    }

    function logout() {
        setUser(null)
    }

     return (
         <Provider value= {{ user, login, logout}}>
             {props.children}
         </Provider>
     )
}

export { UserProvider, UserContext}