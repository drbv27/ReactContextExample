import React from 'react'
import { AppContext } from '../context/appContext'


class Lista extends React.Component {
    render() {
        const { usuarios } = this.context
        return (
            <>
                <ul>
                    {usuarios.map(
                        usuario => <li>{usuario}</li>
                    )}
                </ul>
            </>
        )

    }
}

Lista.contextType = AppContext

export default Lista