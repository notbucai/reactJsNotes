import * as action_types from "./action_types";

const state_data = {
    inputValue: '',
    list: [],
};

// for (let index = 0; index < 2000; index++) {
//     state_data.list.push(String(index));
// }

export default (state = state_data, action) => {
    // 必须创建一个副本出来 就不会影响到这个函数
    const _state = JSON.parse(JSON.stringify(state));
    const { inputValue, list } = _state;

    switch (action.type) {
        case action_types.INPUT_VALUE_CHANGE:
            _state.inputValue = action.value;

            break;

        case action_types.TODO_ADD:

            if (inputValue !== '') {

                _state.list = [{
                    _id: Math.random() * 1000 | 0,
                    value: inputValue
                }, ...list]
                _state.inputValue = "";

            }

            break;

        case action_types.TODO_REMOVE:

            list.splice(action.index, 1);
            _state.list = [...list];

            break;

        case action_types.TODO_LIST_INIT:

            _state.list = [...action.data];

            break;

        default:
            break;
    }

    return _state;
}