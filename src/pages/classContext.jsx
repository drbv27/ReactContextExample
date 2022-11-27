import React from 'react'
import { AppContextProvider } from '../context/appContext'
import Lista from '../components/lista'
import Navbar from '../components/navbar'


function ClassContext() {
    return (
        <AppContextProvider>
            <Navbar />
            <Lista />
        </AppContextProvider>
    )
}

export default ClassContext 