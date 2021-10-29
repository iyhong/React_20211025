import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

const makeTodo = () => {
    const todos = [];
    for(var i = 1; i <= 5; i++) {
        todos.push({id: i, text: `${i}번째 할 일 `, done: false})
    }
    return todos;
};
let cnt = 6;

// Action
export const addTodoAction = createAction(TODOLIST_ADDTODO, (text) => {
    const todo = {id: cnt++, text, done: false};
    return todo;
})
export const updateTodoAction = createAction(TODOLIST_UPDATETODO, id => id);
export const deleteTodoAction = createAction(TODOLIST_DELETETODO, id => id);
export const changeTextAction = createAction(TODOLIST_CHANGETEXT, text => text);

const init = {
    todoList: makeTodo(),
    text: '',
}
const todoListR = handleActions({
    [TODOLIST_ADDTODO]: (state, action) => {
        const data = produce(state, draft => {
            draft.todoList.push(action.payload);
        });
        return data;
        // return {...state, todoList: state.todoList.concat(action.payload) };
    },
    [TODOLIST_UPDATETODO]: (state, action) => {
        const index = state.todoList.findIndex( todo => todo.id === action.payload );
        const data = produce(state, draft => {
            draft.todoList[index].done = !draft.todoList[index].done;
        });
        return data;

        // const updates = state.todoList.map( todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo );
        // return {...state, todoList: updates};
    },
    [TODOLIST_DELETETODO]: (state, action) => {
        const deletes = state.todoList.filter( todo => todo.id !== action.payload );
        return {...state, todoList: deletes};
    },
    [TODOLIST_CHANGETEXT]: (state, action) => {
        return {...state, text: action.payload }
    }
}, init);
export default todoListR;