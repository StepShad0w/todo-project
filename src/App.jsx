import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodoActions from "./components/Todos/TodosActions";
import { IoMdHeart } from "react-icons/io";

function App() {
  const [todos, setTodos] = useState([]);
  const [names, setName] = useState("todo.text");

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };
  const resetAllTodosHandler = () => {
    setTodos([]);
  };

  const deleteDoneTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  const editTodoHandler = (e) => {
    if (e.key == "Enter") {
      e.target.disabled = true;
    }
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const editEditTodoHandler = (e) => {
    // console.log(e);
    // const firstChild = e.target.children[0]
    // if (!firstChild || !firstChild.disabled) {
    //   return;
    // }
    // firstChild.disabled = false;
    // console.log(e);
    document.getElementById("in").disabled = false;
  };

  return (
    <>
      <div className="conteiner">
        <div className="main">
          <h1 className="todoApp">Todo App</h1>
          <TodoForm addTodo={addTodoHandler} />
          {!!todos.length && (
            <TodoActions
              resetAllTodos={resetAllTodosHandler}
              deleteDoneTodos={deleteDoneTodosHandler}
            ></TodoActions>
          )}

          <TodoList
            todos={todos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
            editTodo={editTodoHandler}
            editEditTodo={editEditTodoHandler}
            handleChangeName={handleChangeName}
            names={names}
            setName={setName}
          />
        </div>
      </div>
    </>
  );
}

export default App;
