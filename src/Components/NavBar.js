import React from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase";
import styled from 'styled-components'

const Nav = styled.div`
    width: 100vw;
    height: 60px;
    display: flex 1 1 20%;
    flex-direction: row;
    background: linear-gradient(to bottom, grey 5%, rgba(211, 160, 94, 0.575)  100%);
    color: white;
    top: 0;
    `;


const Outer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin: 0 20px;
    position: relative;
    
    `;
const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    color: #266150;
   
    `;

const Header = styled.li`
    align-self: center;
    color: white;
    margin: 10px;
    `;

const LogOut = styled.button`
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
font-size: 20px;
&:hover{
    background: #955251;
    text-decoration: none;
  }
`;




const NavBar = () => {

    const history = useHistory()

    const signOut = async () => {
        await auth.signOut()
        history.push("/")
    }

    return (
        <Nav>
            <Outer>
            <Title>EZ Recipes</Title>
                <Header>
                    <Link className="tabs" to="/">My Recipes</Link>
                    <Link className="tabs" to="/new">New Recipe?</Link>
                </Header>
                
                    
                
                
                <Header>
                    <Link className="tabs" to="/about">About</Link>
                    <LogOut onClick={signOut}>Log Out</LogOut>
                </Header>
            </Outer>
        </Nav>
    )
}

export default NavBar;