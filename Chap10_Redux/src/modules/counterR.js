
const COUNTER_INCREASE = 'counter/increase';
const COUNTER_DECREASE = 'counter/decrease';

export const increaseAction = (num) => {
    let value = Number(num);
    if(isNaN(value)) value = 0;
    // axios.get(...)       // 이거 실행
    return {type: COUNTER_INCREASE, payload: value}
};
export const decreaseAction = () => {
    return {type: COUNTER_DECREASE}
};

const init = {
    title: 'CounterR',
    num: 0,
}
const counterR = (state = init, action) => {
    switch(action.type) {
        case COUNTER_INCREASE:
            return {...state, num: state.num + action.payload}
        case COUNTER_DECREASE:
            return {...state, num: state.num - 1}
        default: 
            return state;
    }
}
export default counterR;