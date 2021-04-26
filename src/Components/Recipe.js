import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import UserContext from "../context/UserContext"
import { firestore } from "../firebase"

import '../Styles/singleRecipe.css'



const Recipe = (props) => {
    const [recipe, setRecipe] = useState(undefined);
    const user = useContext(UserContext);
    const history = useHistory();

    const deleteRecipe = async () => {
        await firestore
        .collection("users")
        .doc(user.uid)
        .collection("recipes")
        .doc(props.match.params.id).delete();
        history.push("/");
    }


    useEffect(() => {
        const getRecipe = async () => {
            const recipeDoc = await firestore.collection("users")
            .doc(user.uid)
            .collection("recipes")
            .doc(props.match.params.id)
            .get();

            setRecipe(recipeDoc)
        }
        getRecipe()
    } ,[user, props.match.params.id])

    const renderIngredients = () => {
        const recipeData = recipe.data();
        return recipeData.ingredients.map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>
        })
    };

    const renderRecipe = () => {
        const recipeData = recipe.data()
        return (
        <div style={{ background: "rgba(255, 255, 255, 0.479)"}} className="recipe-info">
            <h2 style={{
                // textAlign: 'center',
                textDecoration: 'underline'
            }}
            >{recipeData.name}</h2>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                marginLeft: '20px',
                listStyle: 'square',
                

            }} className="recipe-ingreds"> {renderIngredients()}</ul>
                <pre style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                    <p style={{
                        marginLeft: '20px',
                        marginTop: '20px',
                        listStyle: 'lower-alpha',
                        

                    }} className="recipe-desc">{recipeData.description}</p>
                </pre>
        </div>
     )
    };

    return (
    <div >
        {recipe && renderRecipe()}
        <div className="recipe">
        <button className="delete" onClick={deleteRecipe}>Delete Recipe</button>
        <button className="edit" onClick={() => history.push(`/edit/${props.match.params.id}`)}>Edit your Recipe</button>
        </div>
    </div>
    )
}

export default Recipe