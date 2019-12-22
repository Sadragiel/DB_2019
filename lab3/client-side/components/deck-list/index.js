import React from 'react';
import DeckList from './DeckList';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/deck';


const mapDispathcToProps = dispatch => ({
    deleteDeck: id => dispatch(actions.requestDelete(id)),
    getOneDeck: id => dispatch(actions.requestInstance(id)),
});

const mapStateToProps = state => ({
    deckList: selectors.getList(state), 
    currentSelectedDeckId: ( selectors.getInstance(state) || {} ).id, 
})

export default props => {
    const ConnectedDeckList = connect(
        mapStateToProps,
        mapDispathcToProps
    )(DeckList);
    return (
        <ConnectedDeckList {...props} />
    );
}