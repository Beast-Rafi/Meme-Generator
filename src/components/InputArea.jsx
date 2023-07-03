import { useEffect, useState } from "react";
export default function InputArea() {
    const [allMeme, setAllMeme] = useState()
    const [memeImgData, setMemeImageData] = useState({
        topText: "",
        bottomText:"",
        randomImg:"https://i.imgflip.com/c2qn.jpg"
    })
    useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])
    function handleClick() {
        const memeArr = allMeme
        const memeNumber = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[memeNumber].url
        setMemeImageData(prevMemeImageData => ({
            ...prevMemeImageData ,
            randomImg: url
        }))
    }
    function handleChange(event) {
        const {value , name } = event.target
        setMemeImageData(prevMemeImagesData => {
            return {
                ...prevMemeImagesData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <>
            <div className="flex flex-col justify-center align-middle p-3 gap-2">
                <form className="flex gap-2" onSubmit={handleSubmit}>
                        <input 
                        className="p-1 border border-slate-900 rounded h-8 w-1/2" 
                        type="text" 
                        placeholder="First Sentence" 
                        name="topText"
                        onChange={handleChange}
                        />  
                        <input 
                        className="p-1 border border-slate-900 rounded h-8 w-1/2" 
                        type="text" 
                        placeholder="last Sentence" 
                        name="bottomText"
                        onChange={handleChange}
                        />
                </form>
                <button 
                    onClick={handleClick} 
                    type="submit"
                    className="hover:-translate-y-1 transition-transform shadow-gray-600 shadow-md text-zinc-50 bg-gradient-to-r from-purple-800 to-sky-500 h-10 p-2 rounded">Get a new MEME 🖼</button>
                <div className="relative">
                    <img className="max-w-full rounded-md" src={memeImgData.randomImg} />
                    <h2 className="meme-txt top-0">{memeImgData.topText}</h2>
                    <h2 className=" meme-txt bottom-0">{memeImgData.bottomText}</h2>
                </div>
            </div>
        </>
    )
}