import { put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { actions, selectors, types } from './';

import {selectors as playerSelectors} from './../player'

import httpClient from './../../utils/httpClient';

const urlString = (id = '') => `api/v1/deck/${id}`;

function* requestAll() {
    const currentPlayer = yield select(playerSelectors.getInstance);
    if(!currentPlayer.id)
        return;

    const url = new URL(urlString(), window.origin);
    url.searchParams.set('owner', currentPlayer.id);
    const list = yield httpClient.get(url.toString());

    yield put(actions.setList(list));
}

function* watchRequestAll() {
    yield takeEvery(types.REQUEST_LIST, requestAll);
}

function* requestOne({ payload }) {

    const url = new URL(urlString(payload), window.origin);
    const instance = yield httpClient.get(url.toString());

    yield put(actions.setInstance(instance));
}

function* watchRequestOne() {
    yield takeLatest(types.REQUEST_INSTANCE, requestOne);
}   

function* update({payload}) {
    const url = new URL(urlString(), window.origin);
    const updatedInstance = yield httpClient.put(url.toString(), payload);

    yield requestAll();
    yield put(actions.setInstance(updatedInstance));
}

function* watchUpdate() {
    yield takeLatest(types.REQUEST_UPDATE, update);
}

function* create({ payload }) {
    const currentPlayer = yield select(playerSelectors.getInstance);
    if(!currentPlayer.id)
        return;

    payload.entity.owner = currentPlayer.id;
    payload.entity.rotate = true;
    const url = new URL(urlString(), window.origin);
    const createdInstance = yield httpClient.post(url.toString(), payload);

    yield requestAll();
    yield put(actions.setInstance(createdInstance));
}

function* watchCreate() {
    yield takeLatest(types.REQUEST_CREATE, create);
}

function* deleteInstance({payload : { id }}) {
    const url = new URL(urlString(id), window.origin);
    yield httpClient.delete(url.toString());

    yield requestAll();
    const currentDeck = yield select(selectors.getInstance);
    if(currentDeck.id === id) {
        yield put(actions.setInstance({}));
    }
}

function* watchDelete() {
    yield takeLatest(types.REQUEST_DELETE, deleteInstance);
}

export default [
    watchRequestAll(),
    watchRequestOne(),
    watchUpdate(),
    watchCreate(),
    watchDelete(),
];