import React, {useEffect} from 'react';

import { useFormik } from 'formik';


import './styles.css';

export default ({
    playerList,
    getPlayers, 
    getOnePlayer, 
    deletePlayer,
    currentSelectedPlayerId,
    search,
}) => {
    useEffect(() => {getPlayers()}, []);

    const formik = useFormik({
        initialValues: {
            money_from: 0,
            money_to: 0,
        },
        onSubmit: values => 
            search(values.money_from, values.money_to),
    })

    const isCurrentSelectedPlayer = id => currentSelectedPlayerId === id;

    return ( 
    <div>
        <form onSubmit={formik.handleSubmit}> 
            <h3>Select players with spells or artifacts and with money in diapason:</h3>
            <label htmlFor="money_from">From</label>
            <input 
                id="money_from"
                name="money_from"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.money_from}
            />
            <br />
            <label htmlFor="money_to">To</label>
            <input 
                id="money_to"
                name="money_to"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.money_to}
            />
            <button type="submit">Search</button>

        </form>
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
    </div>
        
    ) 
} 

