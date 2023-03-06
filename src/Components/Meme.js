
import axios from "axios"
import React from "react"
import { useState,useEffect } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])
    
//     useEffect(() => {
//         fetch("https://api.imgflip.com/get_memes")
//         .then(res =>res.json())
//         .then((data) => setAllMemes(data.data.memes))
//   }, [])
useEffect(()=>{
    axios.get("https://api.imgflip.com/get_memes").then((res)=>{
        setAllMemes(res.data.data.memes)})
},[])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: url
        // }))
        setMeme({topText:'',bottomText:'', randomImage: url})
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme({...meme, [name]: value})
    }
    
    return (
        <main>
            <div className="form">
                <div>
                    <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                    />
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                </div>
               
            </div>
            <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt='loading...'/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
