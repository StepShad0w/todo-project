import Todo from "./Todo"
function TodoList(props){
    const {todos, deleteTodo, toggleTodo, editTodo, editEditTodo,handleButtonClick,handleChangeName, setName} = props
    if(todos.length === 0){
        return(
        <h2 className="todoApp">Todo list is empty</h2>)
    }
    else{
        return todos.map( (todo) => <Todo key = {todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} editEditTodo={editEditTodo}  handleChangeName={handleChangeName} setName={setName}/>)}
}
export default TodoList