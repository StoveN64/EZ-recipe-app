import React from "react"
import { useHistory } from "react-router";
import styled from "styled-components";
import { signInWithGoogle } from "../firebase";
import '../Styles/intro.css'


const LogIn = styled.button`
-webkit-border-radius: 27;
-moz-border-radius: 27;
border-radius: 27px;
-webkit-box-shadow: 0px 1px 3px #666666;
-moz-box-shadow: 0px 1px 3px #666666;
box-shadow: 0px 1px 3px #666666;
font-family: Courier New;
color: #000000;
font-size: 18px;
background: #ffffff;
padding: 7px 20px 10px 20px;
border: solid #266150 2px;
text-decoration: none;
  cursor: pointer;
  &:hover{
    background: #955251;
    text-decoration: none;
  }
`;



const AuthHome = () => {

  const history = useHistory()

    const signIn = async () => {
      await signInWithGoogle()
      history.push("/")
    }
    
    return (
        <div className="auth-home">
          <h1 className="title">EZ Recipes</h1>
          {/* <div className="overlay"></div> */}
          <p className="intro">A fun website to simply store your recipes without hassle!</p>
        <LogIn className="intro" onClick={signIn}>Sign in</LogIn>
      </div>
    )




}

export default AuthHome;