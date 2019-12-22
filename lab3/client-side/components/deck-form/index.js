import React from 'react';
import  DeckForm from './DeckForm';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/deck';
import {  selectors as playerSelectors } from './../../store/player';


const mapDispathcToProps = dispatch => ({
    updateDeck: deck => dispatch(actions.requestUpdate(deck)),
    createDeck: deck => dispatch(actions.requestCreate(deck)),
    
});

const mapStateToProps = state => ({
    deck: selectors.getInstance(state),
    canBeEdited: !!(playerSelectors.getInstance(state) || {}).id
});
1
export default props => {
    const ConnectedDeckForm = connect(
        mapStateToProps,
        mapDispathcToProps
    )(DeckForm);
    return (
        <ConnectedDeckForm {...props} />
    );
}