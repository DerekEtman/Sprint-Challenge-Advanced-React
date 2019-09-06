import React from 'react';
import PlayerCard from './PlayerCard';
import { useDarkMode } from '../hooks/useDarkMode';

export const Display = (props) => {
    const [ darkMode, setDarkMode ] = useDarkMode(false);
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    
    
    // console.log(props);
    
    return(
     <div className="playerGrid">
        <h1 className="displayTitle">¡Women's WorldCup FootBall Players!</h1>
         <div className="dark-mode__toggle"> 
          <div 
            onClick={toggleMode}
            className={darkMode? 'toggle toggled' : 'toggle'} 
          />
         </div>

        <div className="playerGrid-test">
        <h2>{props.data.map(player => <PlayerCard data={player} />)}</h2>
        </div>
     </div>
    );

}