import React from 'react'
import { AppContext } from '../context/appContext'

class Navbar extends React.Component {

    render() {
        return(
        <h1>{this.context.titulo} desde Navbar</h1>
        )
    }
}

Navbar.contextType = AppContext

export default Navbar