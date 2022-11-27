import React, { useContext } from 'react'
import { UserContext } from '../context/userContext-hook-based'
import { AppContext } from '../context/appContext'

function Profile() {
    let { user, login, logout } = useContext(UserContext)
    let { titulo } = useContext(AppContext)
    return (
        <div>
            <h1>{titulo}</h1>
            {user ? <button onClick={logout}>Logout</button>
                :
                <button onClick={login}>Login</button>
            }
        </div>
    )
}

export default Profile