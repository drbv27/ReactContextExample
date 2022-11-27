import React, {useContext} from 'react'
import { UserContext } from '../context/userContext-hook-based'

function NavbarHook() {
    let { user } = useContext(UserContext)
        return (
            <nav>
                {user && <h1>Bienvenido: {user.name}</h1>}
            </nav>
        )
}

export default NavbarHook