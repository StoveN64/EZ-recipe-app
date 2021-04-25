import React from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase";

const NavBar = () => {

    const history = useHistory()

    const signOut = async () => {
        await auth.signOut()
        history.push("/")
    }

    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">All Recipes</Link>
                </li>
                <li>
                    <Link to="/new">Add a new EZ Recipe!</Link>
                </li>
                <li>
                    <button onClick={signOut}>Log Out</button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;