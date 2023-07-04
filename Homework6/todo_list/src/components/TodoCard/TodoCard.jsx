import { useSelector, useDispatch } from "react-redux"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TodoCard = () => {

    const todosList = useSelector((state) => state.todoList)
    const checkBox = useSelector((state) => state.checkBox)
    const dispatch = useDispatch()

    const handleDeleteTodo = (todoid) => {
        const newList = todosList.filter((todo) => todo.id !== todoid)
        dispatch({ type: "DELETE_TODO", payload: newList })
    }

    const handleToggleTodo = (checkbox) => {
        if(checkbox === true) {
        dispatch({type: "TODO_DONE", payload: checkbox})
        }
        else {
        const todos = checkBox.pop()
        dispatch({type:"NOT_DONE", payload: checkBox})
            
        }
    }

    return (
        <div>
            {todosList.map((todo) => (
                <div key={todo.id}>
                    <Card border="danger">
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>{todo.name}</Card.Title>
                            <Card.Text>Mark if completed</Card.Text>
                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Done'}
                                            onClick={(id) => handleToggleTodo(id.target.checked)}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                    <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>X</Button>

                </div>
            ))}

        </div>
    )
}

export default TodoCard