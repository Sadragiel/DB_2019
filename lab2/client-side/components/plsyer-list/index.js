import React from 'react';
import PlayerList from './PlayerList';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/player';


const mapDispathcToProps = dispatch => ({
    getPlayers: () => dispatch(actions.requestList())
});


const mapStateToProps = state => ({
    playerList: selectors.getList(state)
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