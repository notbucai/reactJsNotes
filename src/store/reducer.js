import * as action_types from "./action_types";

const state_data = {
    inputValue: '',
    list: [],
};

// for (let index = 0; index < 2000; index++) {
//     state_data.list.push(String(index));
// }

export default (state = state_data, action) => {
    const { inputValue, list } = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case action_types.INPUT_VALUE_CHANGE:
            state.inputValue = action.value;
            break;

        case action_types.TODO_ADD:

            if (inputValue !== '') {

                state.list = [{
                    _id: Math.random() * 1000 | 0,
                    value: inputValue
                }, ...list]
                state.inputValue = "";

            }

            break;

        case action_types.TODO_REMOVE:

            list.splice(action.index, 1);
            state.list = [...list];

            break;

        case action_types.TODO_LIST_INIT:
            // console.log(action);

            state.list = [...action.data];

            break;

        default:
            break;
    }

    return state;
}