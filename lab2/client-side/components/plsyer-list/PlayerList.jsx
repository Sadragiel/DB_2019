import React, {useEffect, useState} from 'react';


export default (props) => {
    useEffect(() => {props.getPlayers()}, []);

    return (
        <ul className="player-list">
            {props.playerList && props.playerList.map(player => (
               <li className="player-list__item" key={player.login}>
                   {player.login}
               </li> 
            ))}
        </ul>
    )
}

