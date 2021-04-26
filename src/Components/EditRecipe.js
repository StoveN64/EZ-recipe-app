import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";
import '../Styles/edit.css'

const Resave = styled.button`
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

const EditRecipe = (props) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const user = useContext(UserContext);
    const history = useHistory();

    


    useEffect(() => {
        const getRecipe = async () => {
            const recipeDoc= await firestore.collection("users")
            .doc(user.uid)
            .collection("recipes")
            .doc(props.match.params.id)
            .get();
            const recipeData = recipeDoc.data();
            setName(recipeData.name);
            setIngredients(recipeData.ingredients.toString());
            setDescription(recipeData.description);
        };
        getRecipe();
    } ,[user, props.match.params.id])




    const saveRecipe = async (e) => {
        e.preventDefault();
        
        const ingredientsArray = ingredients.split(",")
        await firestore.collection("users").doc(user.uid).collection("recipes").doc(props.match.params.id).set({
            name,
            ingredients: ingredientsArray,
            description
        })
        history.push(`/recipe/${props.match.params.id}`)
    };

    return <div className="edit-recipe">
        <h1 className="edit-title">Edit Recipe</h1>
        <form className="edit-form">
            <input className="edit-recipe-name"
            type='text' 
            placeholder='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />{""}
            <textarea className="edit-ingreds"
            type='text' 
            placeholder='Ingredients' 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea className="edit-description"
            placeholder='Description' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
            <Resave onClick={saveRecipe}>Save Recipe</Resave>
        </form>
    </div>
}

export default EditRecipe;