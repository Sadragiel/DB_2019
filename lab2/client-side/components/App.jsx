import React from 'react';

import PlayerList from './player-list';
import PlayerForm from './player-form';
import DeckList from './deck-list';
import DeckForm from './deck-form';

export default function App() {
    return (
        <div>
            <h1>Hello world</h1>
            <div>
                <h2>Player section</h2>
                <PlayerList />
                <PlayerForm />
            </div>
            

            <div>
                <h2>Deck section</h2>
                <DeckList />
                <DeckForm />
            </div>
            
        </div>
    )
} 