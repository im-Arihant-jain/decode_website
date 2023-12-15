import React, { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg'
//import viteLogo from 'https://yt3.googleusercontent.com/_ypJVXMQ86gryY_Yb4bAU8eK0xgXTzMN92NQEtNxFCBu0BESmhN-Fd88ThTuGEyC6RvdZ2w55X0=s176-c-k-c0x00ffffff-no-rj'
import './App.css'
import backimg from './coder-clipart-coding-clipart-practical-10-800x444-removebg-preview.png'
function App() {
  const [count, setCount] = useState(0)
  const words = [
    'Hi we are decode',
    'We love to code',
    'We love to share',
    'Things that you really care',
    'Finding someone like us is very rare',
  ];
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;
  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      setPart(newPart);
    }, speed);
    return () => clearInterval(wordFlick);
  }, [forwards, i, offset, skipCount]);

  return (
    <body >
      <div className='hero' >
      <div className='herosec'>
       
        <h3 class="animate-charcter"> DECODE</h3>
        <div className="word">{part}</div>
        
      </div>
      <img className='heroimg'src={backimg}/>
      
      </div>
      
     
    </body>
  )
}

export default App
