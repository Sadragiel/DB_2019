import player from './player';
import deck from './deck';
import { combineReducers } from 'redux';

export default combineReducers({
    player,
    deck,
});