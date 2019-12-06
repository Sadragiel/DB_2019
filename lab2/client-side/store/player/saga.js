import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { actions, selectors, types } from './';

function* requestAll() {
    const url = `api/v1/player/`;
    const list = yield fetch(url).then( res => res.json());

    //todo map list

    console.log('players reseived: ', list);

    yield put(actions.setList(list));
}

function* watchRequestAll() {
    yield takeEvery(types.REQUEST_LIST, requestAll);
}

//TODO ALL REQUESTS

export default [
    watchRequestAll(),
];