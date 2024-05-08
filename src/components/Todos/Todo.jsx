import { useState } from "react";
import { RiArticleFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./Todo.css";

function Todo({ names,todo, deleteTodo, toggleTodo, editTodo, editEditTodo,handleChangeName,setName }) {
  const [isDisabled, setisDisabled] = useState(false);
  const [inputValue, setInputValue] = useState(todo.text);
  
  const handleButtonClick = () => {
    setisDisabled(!isDisabled);
  };
  
  const handleInputChange = (e) => {
  
      setInputValue(e.target.value);
      handleChangeName(e); 
  
  };

  return (
    todo.text.length !== 0 ? (
      <div className={`${todo.isCompleted ? "todoCompleted" : "todo"}`} >
        <RiArticleFill onClick={handleButtonClick} className="edit" />
        <div className="todoText ">
          <div>
            <input
              className={`${todo.isCompleted ? "controlCompleted" : "control"}`}
              type="text"
              disabled={!isDisabled}
              value={inputValue}
              onChange={handleInputChange}
              onKeyUp={(e)=> editTodo(e)}
            />
          </div>
          <div className="choise">
            <p className="del" onClick={() => deleteTodo(todo.id)}><RiDeleteBin5Line /></p>
            <p className="done" onClick={() => toggleTodo(todo.id)}><FaCheck /></p>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default Todo;
