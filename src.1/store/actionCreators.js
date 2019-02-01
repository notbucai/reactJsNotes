import { TODO_ADD, TODO_REMOVE, INPUT_VALUE_CHANGE, TODO_LIST_INIT, TODO_LIST_INIT_SAGA } from "./action_types";
import axios from "axios";

export const getTodoAddAction = () => ({
    type: TODO_ADD
});

export const getTodoRemoveAction = (input) => ({
    type: TODO_REMOVE,
    input
});

export const getInputValueChangeAction = (value) => ({
    type: INPUT_VALUE_CHANGE,
    value
});

export const getTodoListInitAction = (data) => ({
    type: TODO_LIST_INIT,
    data
});

export const sagaTodoListInitAction = () => ({
    type: TODO_LIST_INIT_SAGA,
});


// thunk 中间件 可以返回一个 函数 
export const ajaxInitTodoListAction = () => {

    return async (dispatch) => {

        const { data } = await axios.get('https://easy-mock.com/mock/5c49c2ba0ae62c756dd9b000/test/list');

        const action = getTodoListInitAction(data.list);

        dispatch(action);
    }

}


// 