export const SET_TODO_ITEM = "SET_TODO_ITEM";


export const setTodoItemInActions = (todoItemPayload) => dispatch => {
    dispatch({
        type: SET_TODO_ITEM,
        payload: todoItemPayload,
    })
}
