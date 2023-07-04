import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch} from 'react-redux';

export const AddTodo = () => {

    const newTodo = useSelector((state) => state.newTodo)

    const todos = useSelector((state) => state.todoList)

    const dispatch = useDispatch()

    const handleInputTodo = (event) => {
        dispatch({type:"NEW_TODO", payload: event.target.value})
    }

    const handleAddNewTodo = () => {
        if(newTodo === '') {
            return 
        }
        else{
            const newToDo = {
                id: Date.now(),
                name: newTodo,
                isDone: false
            }
    
            dispatch({type:"ADD_TODO", payload: newToDo})
        }
       
        
    }
 
    return (
        <div>
        <br />
        <label>Insert new todo</label>
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Todo</InputGroup.Text>
        <Form.Control onChange={handleInputTodo}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <Button variant="outline-dark" onClick={handleAddNewTodo}>Add</Button>
        
        </div>
    )
}