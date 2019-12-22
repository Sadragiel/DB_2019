import React from 'react';
import  PlayerForm from './PlayerForm';
import { connect } from 'react-redux';

import { actions, selectors } from './../../store/player';

const mapDispathcToProps = dispatch => ({
    updatePlayer: player => dispatch(actions.requestUpdate(player)),
    createPlayer: player => dispatch(actions.requestCreate(player)),
    
});

const mapStateToProps = state => ({
    player: selectors.getInstance(state),
});

export default props => {
    const ConnectedPlayerForm = connect(
        mapStateToProps,
        mapDispathcToProps
    )(PlayerForm);
    return (
        <ConnectedPlayerForm {...props} />
    );
    
}