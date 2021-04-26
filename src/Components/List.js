import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        width: 100vw;
        background-image: url("rusticPaper.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100% ;
        background-attachment: fixed;
       
    }
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const ListTitle = styled.h1`
    color: black;
    font-size: 28px;
    display: flex;
    text-decoration: underline;
    justify-content: center;
    margin-top: 6px;
    margin-bottom: 10px;
    
`

const FluffRecipes = styled.ul`
    color: black;
    display: flex;
    justify-content: space-evenly;
`

const AllRecipes = styled.li`
    border: solid;
    borderRadius: 25% 25%;
    height: auto;
    width: auto;
    font-size: 25px;
    &:hover {
        color: #ffffff;
        background: #f6b93b;
        border-color: #f6b93b;
        transition: all 0.4s ease 0s;
      }
`



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
            return <AllRecipes key={i}>
                <Link to={`/recipe/${recipe.id}`}>{recipeData.name}</Link>
                </AllRecipes>
        })
    }

    return (
        <ListContainer>
            <GlobalStyle/>
            <ListTitle>Recipes</ListTitle>
            <FluffRecipes>{renderRecipes()}</FluffRecipes>
        </ListContainer>
    )


}

export default List;