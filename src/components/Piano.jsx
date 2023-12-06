import React, { useEffect, useState, useRef } from 'react'
import {Player} from './'

const Piano = () => {
  const [keys, setKeys] = useState([]);
  const [tone, setTone] = useState('C');
  const toneEl = useRef(null);
  var time=0;

  useEffect(()=>{
    const pianoKeys = document.querySelectorAll(".piano-keys .key"); 
    const keySounds = []
    for (let i=1; i<25; i++){
        keySounds.push(new Audio(require(`../../tunes/${tone}/${i}.wav`)))
    }
    setKeys(keySounds);
    pianoKeys.forEach((key)=>{
        key.addEventListener("click",()=>playTune(key.dataset.key))
    })
  },[tone])

  const playTune = (keydata)=>{
    time++;
    new Audio(require(`../../tunes/${tone}/1.wav`)).play();
  }

  return (
    <div className='piano'>
        <div className='piano-wrapper'>
            <header>
                <h1>Music Memory Challendge</h1>
                <div className='column-volume'>
                    <span>Volume</span> <input type="range"></input>
                </div>
                <div className='column-tone'>
                    <span>Tone Picker</span>
                    <select name="Tone Picker" ref={toneEl} onChange={()=>setTone(toneEl.current.value)} >
                        <option value="C">C Major</option>
                        <option value="G">G Major</option>
                        <option value="D">D Major</option>
                        <option value="A">A Major</option>
                        <option value="E">E Major</option>
                        <option value="B">B Major</option>
                    </select>
                </div>
            </header>
            <Player keys={keys}/>
        <ul className='piano-keys'>
            <li className='key white' data-key='1'><span>c</span></li>
            <li className='key black' data-key='2'><span>#c</span></li>
            <li className='key white' data-key='3'><span>d</span></li>
            <li className='key black' data-key='4'><span>#d</span></li>
            <li className='key white' data-key='5'><span>e</span></li>
            <li className='key white' data-key='6'><span>f</span></li>
            <li className='key black' data-key='7'><span>#f</span></li>
            <li className='key white' data-key='8'><span>g</span></li>
            <li className='key black' data-key='9'><span>#g</span></li>
            <li className='key white' data-key='10'><span>a</span></li>
            <li className='key black' data-key='11'><span>#a</span></li>
            <li className='key white' data-key='12'><span>b</span></li>
            <li className='key white' data-key='13'><span>c</span></li>
            <li className='key black' data-key='14'><span>#c</span></li>
            <li className='key white' data-key='15'><span>d</span></li>
            <li className='key black' data-key='16'><span>#d</span></li>
            <li className='key white' data-key='17'><span>e</span></li>
            <li className='key white' data-key='18'><span>f</span></li>
            <li className='key black' data-key='19'><span>#f</span></li>
            <li className='key white' data-key='20'><span>g</span></li>
            <li className='key black' data-key='21'><span>#g</span></li>
            <li className='key white' data-key='22'><span>a</span></li>
            <li className='key black' data-key='23'><span>#a</span></li>
            <li className='key white' data-key='24'><span>b</span></li>
        </ul>
        </div>
    </div>
  )
}

export default Piano