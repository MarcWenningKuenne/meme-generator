import React from "react"
import memesData from "../memesData";

function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `changeMeme` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    //const [memeImage, setMemeImage] = React.useState("");

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function changeMeme(){
        //let memes = memesData.data.memes
        //let memeID = Math.floor(Math.random() * memesData.data.memes.length)
        //let imageURL = memes[memeID].url
        //setMemeImage(imageURL)

        let memeID = Math.floor(Math.random() * allMemeImages.data.memes.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages.data.memes[memeID].url
            }
        })
    }

    return (
        <main>
            <form>
                <div>
                    <input className="input1" type="text" placeholder="Top text"/>
                    <input className="input2" type="text" placeholder="Bottom text"/>
                </div>
            </form>
            <button onClick={changeMeme}>Get a new meme image 🖼</button>
            <img src={meme.randomImage}/>
        </main>
    )
}

export default Meme