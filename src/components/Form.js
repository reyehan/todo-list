import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from "../redux/todos/action";
import Todos from './Todos';

const Form = () => {

    const [text, setText] = useState("");
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    // const todos = useSelector(state => state.todos);

    const setTodoText = event => {
        setText(event.target.value);
    }

    const setTodos = event => {
        event.preventDefault();
        if(!text.length) {
            alert("Field can not be empty");
            return;
        }
        dispatch(addTodo(text));
        setText("");
    }

    const filterHandler = (event) => {
        setFilter(event.target.value);
    }

    return (
        <>
            <form>
                <input value={text} onChange={setTodoText} type="text" className="todo-list" />
                <button
                    onClick={setTodos}
                    className="todo-button">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={filterHandler} className="filter-todo">
                        <option value="">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <Todos status={filter} />
        </>
    );
}

export default Form;
