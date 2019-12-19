import React from 'react';

import PlayerList from './player-list';
import PlayerForm from './player-form';
import DeckList from './deck-list';
import DeckForm from './deck-form';
import CardList from './card-list';


export default function App() {
    return (
        <div>
            
            <div>
                <h2>Player section</h2>
                <PlayerList />
                <PlayerForm />
            </div>
            <hr />

            <div>
                <h2>Deck section</h2>
                <DeckList />
                <DeckForm />
            </div>
            <hr />

            <div>
                <CardList />
            </div>
            
        </div>
    )
} 