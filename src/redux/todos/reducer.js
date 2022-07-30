import { ADD_TODO, COMPLETE, DELETE_TODO, UNCOMPLETE } from "./actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            return [...state, {id: Date.now(), text: action.payload, completed: false}]

        case DELETE_TODO:
            state = state.filter(todo => todo.id !== action.payload);

            return [...state]

        case COMPLETE:
            const todo = state.find(todo => todo.id === action.payload);
            todo.completed = true;

            return [...state]


        case UNCOMPLETE:
            const completedTodo = state.find(todo => todo.id === action.payload);
            completedTodo.completed = false;

            return [...state]

        default:
            return state;
    }
}

export default todosReducer;