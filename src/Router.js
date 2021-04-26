import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthHome from "./auth/AuthHome"
import UserContext from './context/UserContext';
import EditRecipe from './Components/EditRecipe';
import List from './Components/List';
import NavBar from './Components/NavBar';
import NewRecipe from "./Components/NewRecipe"
import Recipe from './Components/Recipe';
import About from './Components/About'

const Router = () => {

    const user = useContext(UserContext)

    return (
        <BrowserRouter>
            <Switch>
                {user ? (
                    <>
                        <NavBar />

                        <Route exact path="/">
                            <List />
                        </Route>

                        <Route path="/new">
                            <NewRecipe />
                        </Route>
                        <Route path="/recipe/:id" component={Recipe}/>
                        <Route path="/edit/:id" component={EditRecipe}/>
                        <Route path="/about" component={About}/>
                    </>
                ) : (
                    <>
                        
                            <AuthHome />
                        
                    </>
                )}
                
            </Switch>
        </BrowserRouter>

    )
}

export default Router;