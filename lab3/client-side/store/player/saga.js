import { put, takeEvery, takeLatest, select, delay } from 'redux-saga/effects'
import { actions, selectors, types } from './';

import { actions as deckActions} from './../deck';

import httpClient from './../../utils/httpClient';



const urlString = (id = '') => `api/v1/player/${id}`;

function* requestAll() {
    const url = new URL(urlString(), window.origin);
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

    yield put(deckActions.requestList());
}

function* watchRequestOne() {
    yield takeLatest(types.REQUEST_INSTANCE, requestOne);
}   

function* updatePlayer({payload}) {
    const url = new URL(urlString(), window.origin);
    const updatedInstance = yield httpClient.put(url.toString(), payload);

    yield requestAll();
    yield put(actions.setInstance(updatedInstance));
}

function* watchUpdate() {
    yield takeLatest(types.REQUEST_UPDATE, updatePlayer);
}

function* createPlayer({ payload }) {
    const url = new URL(urlString(), window.origin);
    const createdInstance = yield httpClient.post(url.toString(), payload);

    yield requestAll();
    yield put(actions.setInstance(createdInstance));
}

function* watchCreate() {
    yield takeLatest(types.REQUEST_CREATE, createPlayer);
}

function* deletePlayer({payload : { id }}) {
    const url = new URL(urlString(id), window.origin);
    yield httpClient.delete(url.toString());

    yield requestAll();
    const currentPlayer = yield select(selectors.getInstance);
    if(currentPlayer.id === id) {
        yield put(actions.setInstance({}));
    }
}

function* watchDelete() {
    yield takeLatest(types.REQUEST_DELETE, deletePlayer);
}

function* search({payload: {from, to}}) {
    yield delay(500);
    const url = new URL(urlString('search'), window.origin);
    url.searchParams.set('maney_from', from);
    url.searchParams.set('maney_to', to);

    const list = yield httpClient.get(url.toString());

    yield put(actions.setList(list));
}

function* wathcSearch() {
    yield takeLatest(types.PARAMETRIZED_SEARCH, search);
}

export default [
    watchRequestAll(),
    watchRequestOne(),
    watchUpdate(),
    watchCreate(),
    watchDelete(),
    wathcSearch(),
];