
import axios from 'axios';
import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER/INCREASE';
const COUNTER_DECREASE = 'COUNTER/DECREASE'; 

const increaseAction = createAction(COUNTER_INCREASE, (num) => {
    console.log('2. increaseAction')
    return num;
});
export const decreaseAction = createAction(COUNTER_DECREASE);

export const increaseActionAsync = (num) => (dispatch) => {
    console.log('1. increaseActionAsync')
    // axios.get(..).then( resp => dispatch(resp.data))
    setTimeout( () => {
        dispatch(increaseAction(num + 10))
    }, 2000);
};

const init = {
    num: 0,
    moduleName: 'Counter Module',
}

const counterR = handleActions({
    [COUNTER_INCREASE]: (state, action) => ({...state, num: state.num + action.payload}),
    [COUNTER_DECREASE]: (state, action) =>({...state, num: state.num - 1})
}, init);
export default counterR;
