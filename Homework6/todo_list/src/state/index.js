import { legacy_createStore as createStore } from "redux";
import TodoReduser from "./redusers/todoReduser";


const store = createStore(TodoReduser)

export default store