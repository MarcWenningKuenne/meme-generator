import React from "react"

function Meme() {
    return (
        <main>
            <form>
                <div>
                    <input className="input1" type="text" placeholder="Top text"/>
                    <input className="input2" type="text" placeholder="Bottom text"/>
                </div>
                <button>Get a new meme image 🖼</button>
            </form>
            <img src=""/>
        </main>
    )
}

export default Meme