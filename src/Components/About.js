import React, { Component } from 'react'
import "../Styles/about.css"
export class About extends Component {
    render() {
        return (
            <div className="about-container">
                <p className="mono"> This website was created for the sole purpose of simplifying recipes using the awesome K.I.S.S design principle. Sure, there's many websites out there with even more recipes. <br></br><br></br>   But have you found one that doesn't include the author's whole life story 6 paragraphs before the vaguely listed directions? This website is hopefully an answer to this problem. Now, you can catalogue the recipes, listing only the name, ingredients, and cooking directions.<br></br><br></br>  So if you decide to log in a recipe, just Keep It Simple, Silly :)  </p>
            </div>
            
        )
    }
}

export default About
