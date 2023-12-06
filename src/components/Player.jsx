import React, { useState, useEffect } from 'react'

const Player = ({keys}) => {
    const [notes, setNotes] = useState([]);
    const getRandomNotes = (num) => {
            let selectedNotes = []
            for (let i=0; i< num; i++){
                var key = Math.floor(Math.random()*24)+1;
                selectedNotes.push(key);
            }
            setNotes(selectedNotes)
        }
    useEffect(()=>{
        getRandomNotes(2);
    },[])
    const play = () =>{
        console.log(notes)
        for (let note in notes){
            console.log(keys[notes[note]])
            keys[notes[note]].play()
        }
    }
    return (
        <div>Player

            <button onClick={play}>play</button>
        </div>
    )
}

export default Player