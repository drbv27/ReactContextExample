import React from 'react'

const AppContext = React.createContext({
    usuarios: ['pablo'],
    titulo: 'default'
})

function AppContextProvider(props) {
    return (
        <AppContext.Provider value = {{
            usuarios: ['juan', 'pepito'],
            titulo: 'app'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }