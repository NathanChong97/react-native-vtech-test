import { 
    SET_TODO_ITEM, 
} from './actions';


const initialState = {
    todo_item: []
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TODO_ITEM: 
            return {...state, todo_item: action.payload};

        default:
            return state;
    }
}

export default userReducer;