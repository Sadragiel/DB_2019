import React, {useEffect} from 'react';

import './styles.css';

export default ({
    playerList,
    getPlayers, 
    getOnePlayer, 
    deletePlayer,
    currentSelectedPlayerId
}) => {
    useEffect(() => {getPlayers()}, []);

    const isCurrentSelectedPlayer = id => currentSelectedPlayerId === id;

    return ( 
        <ul className="player-list"> 
            { playerList && playerList.map(player => ( 
                <li className={`player-list__item ${isCurrentSelectedPlayer(player.id) ? 'player-list__item--active' : ''}`} 
                    key={player.id} 
                    onClick={() => !isCurrentSelectedPlayer(player.id)  && getOnePlayer(player.id)}> 
                   
                   <p>{player.login}</p>
                   <button onClick={(e) => e.preventDefault() || deletePlayer(player.id)}>DELETE</button>
                </li> 
            ))} 
        </ul> 
    ) 
} 

