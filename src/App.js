import React, {useState, useEffect} from "react";
// import Array from "./components/memesdata"

export default function App() {

  const [memeImage, setMemeImage] = useState([])
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes))
  }, [])
  

  const [state, setState] = useState({
    topText: "",
    bottomText:"",
    url: "https://i.imgflip.com/30b1gx.jpg"
  })

  const handleClick = () => {
    // const memesArray = memeImage.data.memes
    const random = Math.floor(Math.random() * memeImage.length)
    setState(prev => ({
      ...prev,
      url: memeImage[random].url
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setState(prev => ({  
        ...prev,
        [name]: value
      
    }))
  }

  return (

    <div className="container">
      <div className="inputs">
        <input 
          placeholder="Top text"
          name="topText" 
          type="text"
          value={state.topText}
          onChange={handleChange}
        />
        <input 
          placeholder="Bottom text" 
          name="bottomText" 
          type="text"
          value={state.bottomText}
          onChange={handleChange}
        />

        <input 
          id="btn" 
          value="Get new Meme Image" 
          onClick={handleClick} 
          type="submit"
        />
      </div>
      <div className="image">
        <h1 className="h2-1">{state.topText}</h1>
        <img src={state.url} alt="image"/>
        <h1 className="h2-2">{state.bottomText}</h1>
      </div>
      <footer>
      

      </footer>
    </div>

  )



}