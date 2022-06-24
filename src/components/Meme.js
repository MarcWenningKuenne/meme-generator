import React from "react"
import memesData from "../memesData";

function Meme() {
    const [memeImage, setMemeImage] = React.useState("");

    function changeMeme(){
        let memes = memesData.data.memes
        let memeID = Math.floor(Math.random() * memesData.data.memes.length)
        let imageURL = memes[memeID].url
        setMemeImage(imageURL)
    }

    return (
        <main>
            <form>
                <div>
                    <input onClick={changeMeme} className="input1" type="text" placeholder="Top text"/>
                    <input className="input2" type="text" placeholder="Bottom text"/>
                </div>
            </form>
            <button onClick={changeMeme}>Get a new meme image 🖼</button>
            <img src={memeImage}/>
        </main>
    )
}

export default Meme