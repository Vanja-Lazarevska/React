import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import TodoCard from "./components/TodoCard/TodoCard"
import { Todos } from "./components/Todos/Todos"
import store from "./state"

function App() {

  return (
    <>
    <Provider store={store}>
    <Todos />
    </Provider>
    </>
  )
}

export default App
