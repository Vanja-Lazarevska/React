
const initialState = {
    todoList: [
        {id:'1', 
        name:'Walk the dog', 
        isDone: true},
        {id:'2', 
        name:'Read a book', 
        isDone: false}
    ],
    newTodo: '',
    checkBox: []
}
const TodoReduser = (state = initialState, action) => {

    switch (action.type) {
        case 'NEW_TODO':
            return {
                ...state,
                newTodo: action.payload
            }
        case 'ADD_TODO' :
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                newTodo: ""
           
            }
        case 'DELETE_TODO': 
            return {
                ...state,
                todoList: [...action.payload]
            }
        case 'TODO_DONE':
            return {
                ...state,
                checkBox: [...state.checkBox,action.payload]
            }
        case 'NOT_DONE':
            return {
                ...state,
                checkBox: [...action.payload]
            }
    
        default:
            return state
         
    }

}

export default TodoReduser