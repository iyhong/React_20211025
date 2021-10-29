// TodoListContext.js
import {createContext, useCallback, useRef, useState} from 'react'

const TodoListContext = createContext({
    stage: {
        todoList: [],
        text: ''
    },
    action: {
        addTodo: (text) => {},
        updateTodo: (id) => {},
        deleteTodo: (id) => {},
        changeText: (text) => {}
    }
});

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

function TodoListContextProvider(props) {
    const [todoList, setTodoList] = useState(makeTodo());
    const [text, setText] = useState('');
    const cnt = useRef(6);

    const updateTodo = useCallback( id => {
        const data = (todoList) => todoList.map( todo => {
            if(todo.id === id) return {...todo, done: !todo.done}
            else return todo
        })
        setTodoList(data);
    }, []);
    const deleteTodo = useCallback( id => {
        const data = (todoList) => todoList.filter( todo => {
            return todo.id !== id
        });
        setTodoList(data);
    }, [])
    const addTodo = useCallback( text => {
        const todo = {id: cnt.current++, text: text, done: false};
        setTodoList( (todoList) => todoList.concat(todo));
    }, []);
    const changeText = useCallback( text => setText(text), []);

    const data = {
        state: { todoList, text },
        action: {addTodo, updateTodo, deleteTodo, changeText}
    }
    return (
        <TodoListContext.Provider value={data}>
            {props.children}
        </TodoListContext.Provider>
    )
}
const TodoListContextConsumer = TodoListContext;
export {TodoListContextProvider, TodoListContextConsumer}
