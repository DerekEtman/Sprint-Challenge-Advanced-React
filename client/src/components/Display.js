import React from 'react';

export const Display = (props) => {
    console.log(props);


    return(
        <div>
        <h3>test</h3>
        <h2>{props.data.map(player => ( player.name))}</h2>
        </div>
    )

}