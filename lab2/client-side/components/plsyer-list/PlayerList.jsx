import React, {useEffect, useState} from 'react';


export default (props) => {
    useEffect(() => {props.getPlayers()}, []);

    console.log('player list:', props.playerList);


    return (
        <ul className="player-list">
            {(props.playerList || [{login: 'there are no players'}]).map(player => (
               <li className="player-list__item" key={player.login}>
                   {player.login}
               </li> 
            ))}
        </ul>
    )
}

