import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";
import styled from 'styled-components'

const Save = styled.button `
-webkit-border-radius: 27;
-moz-border-radius: 27;
border-radius: 27px;
-webkit-box-shadow: 0px 1px 3px #666666;
-moz-box-shadow: 0px 1px 3px #666666;
box-shadow: 0px 1px 3px #666666;
font-family: Courier New;
color: #000000;
background: #ffffff;
border: solid #266150 2px;
text-decoration: none;
cursor: pointer;
font-size: 25px;
&:hover{
    background: #955251;
    text-decoration: none;
  }
`;






const NewRecipe = () => {
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [description, setDescription] = useState("")
    const user = useContext(UserContext)

    const saveRecipe = async (e) => {
        e.preventDefault();
        
        const ingredientsArray = ingredients.split(",")
        await firestore
        .collection("users")
        .doc(user.uid)
        .collection("recipes")
        .add({
            name,
            ingredients: ingredientsArray,
            description
        })
        setName("");
        setIngredients("");
        setDescription("");
    };

    return <div className="new-recipe">
        <h1 className="new-title">New Recipe</h1>
        <form className='recipe-form'>
            <input className="new-recipe-name"
            type='text' 
            placeholder='Here you can put the title of your recipe...' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />{""}
            <textarea className="new-ingreds"
            type='text' 
            placeholder='Ingredients (separate with commas!)' 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea className="new-description"
            placeholder='Cooking Directions...' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
            <Save onClick={saveRecipe}>Save Recipe</Save>
        </form>
    </div>
}

export default NewRecipe;