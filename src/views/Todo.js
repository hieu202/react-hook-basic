const Todo = (props) => {
    // const todos = props.todos;
    const {todos, deleteTodo} = props;
    const handleDelete = (id) => {
        deleteTodo(id);
    }
    return (
        <div className="todos-container">
            {todos && todos.map(todo => {
                return (
                    <li className="todo-child" key={todo.id}>{todo.title} &nbsp; <span onClick={()=> handleDelete(todo.id)}>x</span></li>
                )
            })}

        </div>
    )
}
export default Todo;