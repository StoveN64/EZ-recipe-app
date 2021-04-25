import React from 'react'
import { UserProvider } from './context/UserContext';
import Router from "./Router"

const App = () => {
    return (
    <UserProvider>
        <Router />
    </UserProvider>
    )
}

export default App;