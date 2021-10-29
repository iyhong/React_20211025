import { combineReducers } from 'redux'
import counterR from './counterR'
import todoListR from './todoListR'

// 단일 store만 지원하므로 모든 reducer를 병합.
const rootStore = combineReducers({
    counterR, todoListR, 
});
export default rootStore;