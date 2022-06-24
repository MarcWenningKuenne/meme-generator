import React from "react"

function Header() {
    const icon = require("../img/icon.png")

    return (
        <header>
            <div>
                <img src={icon}/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header