
import React, { useContext } from 'react'
import './css/todos.css';
import TodoListItem from './TodoListItem'
import { TodoListContextConsumer } from './../modules/TodoListContext'

function Todolist(){
    const { state } = useContext(TodoListContextConsumer);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { state.todoList.map( todo => <TodoListItem key={todo.id} todo={todo} />)}
                </tbody>
            </table>
        </div>
    )
    
}
export default Todolist;
