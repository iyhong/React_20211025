
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
export const addTodoAction = (text) => {
    const todo = {id: cnt++, text, done: false};
    // state에 관련된 작업은 reducer(counterR에 넘긴다)
    return { type: TODOLIST_ADDTODO, payload: todo};
}
export const updateTodoAction = (id) => ({ type: TODOLIST_UPDATETODO, payload: id });
export const deleteTodoAction = (id) => ({ type: TODOLIST_DELETETODO, payload: id });
export const changeTextAction = (text) => ({ type: TODOLIST_CHANGETEXT, payload: text });

const init = {
    todoList: makeTodo(),
    text: '',
}
const todoListR = (state = init, action) => {
    switch(action.type) {
        case TODOLIST_ADDTODO:
            return {...state, todoList: state.todoList.concat(action.payload) };
        case TODOLIST_UPDATETODO:
            const updates = state.todoList.map( todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo );
            return {...state, todoList: updates};
        case TODOLIST_DELETETODO:
            const deletes = state.todoList.filter( todo => todo.id !== action.payload );
            return {...state, todoList: deletes};
        case TODOLIST_CHANGETEXT:
            return {...state, text: action.payload }
        default: 
            return state;
    }
}
export default todoListR;