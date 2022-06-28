import React from "react"
import memesData from "../memesData";

function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function changeMemeImage(){
        let memeID = Math.floor(Math.random() * allMemeImages.data.memes.length)

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages.data.memes[memeID].url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <form>
                <div>
                    <input className="input1" 
                        type="text" 
                        placeholder="Top text" 
                        onChange={handleChange} 
                        name="topText" 
                        value={meme.topText}
                    />
                    <input className="input2" 
                        type="text" 
                        placeholder="Bottom text" 
                        onChange={handleChange} 
                        name="bottomText" 
                        value={meme.bottomText}
                    />
                </div>
            </form>
            <button onClick={changeMemeImage}>Get a new meme image 🖼</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme