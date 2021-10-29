// TodoListContext.js
import {createContext} from 'react'

const TodoListContext = createContext({
    stage: {},
    action: {}
});

function TodoListContextProvider() {
    return (
        <TodoListContext>
            
        </TodoListContext>
    )
}
const TodoListContextConsumer = TodoListContext.Consumer
export {TodoListContextProvider, TodoListContextConsumer}
