import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import playerSaga from './player/saga';
import deckSaga from './deck/saga';

function* rootSaga() {
  yield all([
    ...playerSaga,
    ...deckSaga,
  ]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;