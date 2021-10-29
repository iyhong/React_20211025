import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'counter/increase';
const COUNTER_DECREASE = 'counter/decrease';

export const increaseAction = createAction(COUNTER_INCREASE, (num) => {
    let value = Number(num);
    if(isNaN(value)) value = 0;
    return value;       // payload라는 key로 전달한다.
})
export const decreaseAction = createAction(COUNTER_DECREASE)

const init = {
    title: 'CounterR',
    num: 0,
}
const counterR =handleActions({
    [COUNTER_INCREASE]: (state, action) => {
        return {...state, num: state.num + action.payload}
    },
    [COUNTER_DECREASE]: (state, action) => {
        return {...state, num: state.num - 1}
    }
}, init);

export default counterR;