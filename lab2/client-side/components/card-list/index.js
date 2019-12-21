import React from 'react';
import CardList from './CardList';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/card';
import {  selectors as playerSelectors } from './../../store/player';

// cardList,
//     currentPlayerId,



const mapDispathcToProps = dispatch => ({
    obtain: id => dispatch(actions.requestCreate({id})),
    getOneDeck: id => dispatch(actions.requestInstance(id)),
    showMyCards: () => dispatch(actions.requestListByOwner()),
    showAllCards: () => dispatch(actions.requestList()),
    search: text => dispatch(actions.fullTextSearch(text)),
});

const mapStateToProps = state => ({
    cardList: selectors.getList(state), 
    currentPlayerId: ( playerSelectors.getInstance(state) || {} ).id, 
})

export default props => {
    const ConnectedCardList = connect(
        mapStateToProps,
        mapDispathcToProps
    )(CardList);
    return (
        <ConnectedCardList {...props} />
    );
}