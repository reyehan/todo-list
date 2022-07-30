import { ADD_TODO, DELETE_TODO, COMPLETE, UNCOMPLETE } from "./actionTypes";

const addTodo = (text) => {
    return {type: ADD_TODO, payload: text}
}

const deleteTodo = todoId => {
    return {type: DELETE_TODO, payload: todoId}
}

const completeTodo = todoId => {
    return {type: COMPLETE, payload: todoId}
}

const uncompleteTodo = todoId => {
    return {type: UNCOMPLETE, payload: todoId}
}

export {
    addTodo,
    deleteTodo,
    completeTodo,
    uncompleteTodo,
}