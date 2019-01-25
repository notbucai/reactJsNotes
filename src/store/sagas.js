import { put, takeLatest } from 'redux-saga/effects'
import { TODO_LIST_INIT_SAGA } from './action_types';
import { getTodoListInitAction } from './actionCreators';
import axios from "axios";

function* initTodoList() {

    const { data } = yield axios.get('https://easy-mock.com/mock/5c49c2ba0ae62c756dd9b000/test/list');

    const action = getTodoListInitAction(data.list);

    yield put(action);
}

function* sagas() {
    // console.log(123);
    // takeLatest 不允许并发处理
    yield takeLatest(TODO_LIST_INIT_SAGA, initTodoList);
}

export default sagas;