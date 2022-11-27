import React from 'react'
import { UserProvider } from '../context/userContext-hook-based'
import Profile from '../components/profile'
import NavbarHook from '../components/navbar_hook'

function HookContext() {

    return (
        <UserProvider>
            <NavbarHook />
            <Profile />
        </UserProvider>
    )
}

export default HookContext