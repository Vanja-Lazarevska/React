import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';

const Counter = () => {

    const todoList = useSelector((state) => state.todoList)
    const numberOfTodos = todoList.length

    const doneTodos = useSelector((state) => state.checkBox)
    const numberOfDoneTodos = doneTodos.length

    return (
        <div>

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Total todos</Accordion.Header>
        <Accordion.Body>
        Total amount of todos is: {numberOfTodos}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Total completed todos</Accordion.Header>
        <Accordion.Body>
        Total amount of completed todos is: {numberOfDoneTodos}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
        
        </div>
    )
}

export default Counter