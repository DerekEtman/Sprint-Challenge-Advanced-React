import React from 'react';

export default function PlayerCard (props) {
    // console.log(props.data)
    const {name, country, searches, id} = props.data;
    // console.log(name);
    
    return(
        <div className="cardWrapper">
            <div className="playerCard">
                <h3>Name: {name}</h3>
                <div className="playerDetails">
                    <h4>Country: {country}</h4>
                    <p>No. of Searches: {searches}</p>
                </div>
            </div>
        </div>
    )

}