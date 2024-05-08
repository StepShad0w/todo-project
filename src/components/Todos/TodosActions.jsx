import Button from "../UI/Button"
import { GrPowerReset } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
function TodoActions({resetAllTodos, deleteDoneTodos}){
    return(
        <>
            <div className="buttons-menu">
            <Button title="Reset Todos" onClick={resetAllTodos}><GrPowerReset  /></Button>
            <Button title="Delete All Todos" onClick={deleteDoneTodos}><MdDeleteForever /></Button>
            </div>
            
        </>
    )
}
export default TodoActions