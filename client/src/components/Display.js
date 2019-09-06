import React from 'react';
import PlayerCard from './PlayerCard';

export const Display = (props) => {
    console.log(props);


    return(
        <div className="playerGrid">
        <h2>{props.data.map(player => <PlayerCard data={player} />)}</h2>
        </div>
    );

}