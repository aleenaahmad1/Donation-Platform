import { useState } from 'react'

export default function Joke({id, joke}){
    const [likes, setLike] = useState(0)

    const handleLike = () =>{
        setLike(likes+1)
        console.log(`Like id: ${id}, total likes: ${likes}`)
    }
    const handleDislike = () =>{
        setLike(likes-1)
        console.log(`Like id: ${id}, total likes: ${likes}`)
    }
    return (
        <div>
            <p>{joke}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    )
}