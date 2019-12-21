import React from 'react';
import PlayerList from './PlayerList';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/player';


const mapDispathcToProps = dispatch => ({
    deletePlayer: id => dispatch(actions.requestDelete(id)),
    getPlayers: () => dispatch(actions.requestList()),
    getOnePlayer: id => dispatch(actions.requestInstance(id)),
    search: (from, to) => dispatch(actions.parametrizedSearch(from, to)),
});

const mapStateToProps = state => ({
    playerList: selectors.getList(state), 
    currentSelectedPlayerId: ( selectors.getInstance(state) || {} ).id, 
})

export default props => {
    const ConnectedPlayerList = connect(
        mapStateToProps,
        mapDispathcToProps
    )(PlayerList);
    return (
        <ConnectedPlayerList {...props} />
    );
}