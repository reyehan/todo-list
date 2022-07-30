const filterHandler = (status, setFilter, todos) => {
    switch (status) {
        case 'completed':
            setFilter(todos.filter(todo => todo.completed === true));
            break;
        case 'uncompleted':
            setFilter(todos.filter(todo => todo.completed === false));
            break;
        default:
            setFilter(todos);
            break;
    }
}

export {
    filterHandler,
}