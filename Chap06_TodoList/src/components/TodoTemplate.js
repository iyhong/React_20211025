
import React, { useCallback, useRef, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import produce from 'immer'

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5000; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());
    const cnt = useRef(5001);

    // const updateTodo = useCallback( id => {
    //     const data = todoList.map( todo => todo.id === id ? {...todo, done: !todo.done} : todo);
    //     setTodoList(data);
    // }, [todoList]);

    const updateTodo = useCallback( id => {
        /*
        const data = todoList.map( todo => {
            if(todo.id === id) return {...todo, done: !todo.done}
            else return todo
        })
        */
        const index = todoList.findIndex( todo => todo.id === id );
        const data = produce(todoList, draft => {
            draft[index].done = !draft[index].done;
        })
        setTodoList(data);
    }, [todoList]);

    const deleteTodo = useCallback( id => {
        const data = todoList.filter( todo => {
            return todo.id !== id
        });
        setTodoList(data);
    }, [todoList])

    // let cnt = 6;
    const addTodo = useCallback( text => {
        const todo = {id: cnt.current++, text: text, done: false};
        setTodoList(todoList.concat(todo));
    }, [todoList]);


    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodo={addTodo} />
            <br />
            <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    )
}
export default TodoTemplate;