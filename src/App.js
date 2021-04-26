import React from 'react'
import { UserProvider } from './context/UserContext';
import Router from "./Router"
import './reset.css'

const App = () => {
    return (
    <UserProvider>
        <Router />
    </UserProvider>
    )
}

export default App;