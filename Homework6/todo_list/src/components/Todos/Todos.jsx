import { AddTodo } from "../AddTodo/AddTodo"
import Counter from "../Counter/Counter"
import TodoCard from "../TodoCard/TodoCard"

export const Todos = () => {

   
    return (
        <div>
            <h1>Todos</h1>

            <h3>List of todos</h3>
            <TodoCard/>
            <AddTodo />
            <Counter />
        </div>
    )
}