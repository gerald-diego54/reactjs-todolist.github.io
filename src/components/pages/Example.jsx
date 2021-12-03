import { ToggleButton } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react'

const Example = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('Hi this is Gerald');
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    let toggleButton = () => {
        setIsActive(!isActive);
    }
    let Reset = () => {
        setIsActive(isActive);
        setTimer(0);
    }

    useEffect(() => {
        let interval = 0;
        if (isActive) {
            interval = setInterval(() => setTimer(timer => timer + 1), 1000);
        }
        else if (!isActive && timer!=0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);
    return (
        <div>
            <h2>{userName}</h2>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <p>You Click {count} times</p>
            <button onClick={() => setCount(count + 1)}>click Me</button>
        <div>
           <p>The timer is: {timer}</p> 
           <button onClick={toggleButton}>{isActive ? 'Pause' : 'Start'}</button>
           <button onClick={Reset}>Reset</button>
        </div>
        </div>
    )
}

export default Example
