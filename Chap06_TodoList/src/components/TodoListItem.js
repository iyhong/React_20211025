
import React from 'react'
import './css/todos.css'

function TodoListItem(props) {

    const { todo, updateTodo, deleteTodo } = props;         // { id: ?, text: '?번째 할일', done: false }

    return (
        <tr>
            <td>{todo.id}</td>
            {/* className={cns('done': todo.done)} */}
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={ () => updateTodo(todo.id) }>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => deleteTodo(todo.id) }>Delete</button>
            </td>
        </tr>
    )
}

export default TodoListItem
