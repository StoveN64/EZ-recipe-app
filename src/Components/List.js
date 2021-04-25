import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";

const List = () => {

    const [recipes, setRecipes] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        const getRecipes = async () => {
            const recipeCollection = await firestore.collection("users").doc(user.uid).collection("recipes").get();
            setRecipes(recipeCollection.docs)
        }
        getRecipes()
    } ,[user])

    const renderRecipes = () => {
        return recipes.map((recipe, i) => {
            const recipeData = recipe.data();
            return <li key={i}>
                <Link to={`/recipe/${recipe.id}`}>{recipeData.name}</Link>
                </li>
        })
    }

    return (
        <div className="list">
            <h1>Recipes</h1>
            <ul>{renderRecipes()}</ul>
            </div>
    )


}

export default List;