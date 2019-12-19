import { put, takeEvery, takeLatest, select, delay  } from 'redux-saga/effects'
import { actions, selectors, types } from './';

import {selectors as playerSelectors} from './../player'

import httpClient from './../../utils/httpClient';

const urlString = (id = '') => `api/v1/card/${id}`;

function* requestAll() {
    const url = new URL(urlString(), window.origin);
    const list = yield httpClient.get(url.toString());

    yield put(actions.setList(list));
}

function* watchRequestAll() {
    yield takeEvery(types.REQUEST_LIST, requestAll);
}

function* requestByOwner() {
    const currentPlayer = yield select(playerSelectors.getInstance);
    if(!currentPlayer.id)
        return;

    const url = new URL(urlString(), window.origin);
    url.searchParams.set('owner', currentPlayer.id);
    const list = yield httpClient.get(url.toString());

    yield put(actions.setList(list));
}

function* watchRequestByOwner() {
    yield takeEvery(types.REQUEST_BY_OWNER, requestByOwner);
}

function* requestOne({ payload }) {

    const url = new URL(urlString(payload), window.origin);
    const instance = yield httpClient.get(url.toString());

    yield put(actions.setInstance(instance));
}

function* watchRequestOne() {
    yield takeLatest(types.REQUEST_INSTANCE, requestOne);
}   

function* create({ payload }) {
    const currentPlayer = yield select(playerSelectors.getInstance);
    if(!currentPlayer.id)
        return;
        console.log('pay', payload)
    const url = new URL(urlString('player'), window.origin);
    const createdInstance = yield httpClient.post(url.toString(), {
        cardLink: {
            cid: payload.entity.id,
            pid: currentPlayer.id
        }
    });
    
    yield put(actions.setInstance(createdInstance));
}

function* watchCreate() {
    yield takeLatest(types.REQUEST_CREATE, create);
}

function* search({ payload: searchString }) {
    console.log('1', searchString)
    
    yield delay(500);
    console.log('2')

    if(!searchString)
        return;
    const url = new URL(urlString('search'), window.origin);
    url.searchParams.set('search', searchString);

    const list = yield httpClient.get(url.toString());

    yield put(actions.setList(list));
}

function* watchSearch() {
    yield takeLatest(types.FULL_TEXT_SEARCH, search);
}

export default [
    watchRequestAll(),
    watchRequestByOwner(),
    watchRequestOne(),
    watchCreate(),
    watchSearch(),
];