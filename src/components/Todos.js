import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterHandler } from '../functions';

import { completeTodo, deleteTodo, uncompleteTodo } from "../redux/todos/action";

const Todos = ({ status }) => {

    const dispatch = useDispatch()
    let todos = useSelector(state => state.todos);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(todos);
    }, [todos, setData])

    useEffect(() => {
        filterHandler(status, setData, todos);
    }, [status, setData, todos])

    const deleteHandler = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    const complete = (todoId) => {
        dispatch(completeTodo(todoId))
    }

    const uncomplete = (todoId) => {
        dispatch(uncompleteTodo(todoId))
    }

    return (
        <div className="todo">
            {
                data.map(todo => (
                    <React.Fragment key={todo.id}>
                        <p>{todo.text}</p>
                        {
                            todo.completed ?
                                <button onClick={() => uncomplete(todo.id)} className="complete-btn">
                                    <i className="fa-solid fa-x"></i>
                                </button> :
                                <button onClick={() => complete(todo.id)} className="complete-btn">
                                    <i className="fas fa-check"></i>
                                </button>
                        }
                        <button onClick={() => deleteHandler(todo.id)} className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </React.Fragment>
                ))
            }
            {/* <li className="todo-item">todo</li> */}
        </div>
    );
}

export default Todos;