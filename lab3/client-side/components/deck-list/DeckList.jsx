import React from 'react';

import './styles.css';

export default ({
    deckList,
    getOneDeck, 
    deleteDeck,
    currentSelectedDeckId
}) => {

    const isCurrentSelectedDeck = id => currentSelectedDeckId === id;

    return ( 
        <ul className="deck-list"> 
            { deckList ? deckList.map(deck => ( 
                <li className={`deck-list__item ${isCurrentSelectedDeck(deck.id) ? 'deck-list__item--active' : ''}`} 
                    key={deck.id} 
                    onClick={() => !isCurrentSelectedDeck(deck.id)  && getOneDeck(deck.id)}> 
                   
                    <p>{deck.title}</p>
                    <p>{deck.rotate ? 'Rotate' : 'Unlimited'}</p>
                    <button onClick={(e) => e.preventDefault() || deleteDeck(deck.id)}>DELETE</button>
                </li> 
            ))
                : <p>THERE ARE NO DECKS!</p>
            } 
        </ul> 
    ) 
} 

