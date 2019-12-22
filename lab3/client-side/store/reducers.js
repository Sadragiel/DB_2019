import player from './player';
import deck from './deck';
import card from './card';
import { combineReducers } from 'redux';

export default combineReducers({
    player,
    deck,
    card,
});