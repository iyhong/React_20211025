
const init = {
    title: 'CounterR',
    num: 0,
}
const counterR = (state = init, action) => {
    switch(action.type) {
        case 'counter_increase':
            return {...state, num: state.num + action.payload}
        case 'counter_decrease':
            return {...state, num: state.num - 1}
        default: 
            return state;
    }
}

function store(reducer) {
    let state = reducer(undefined, '');
    // console.log(state);

    const getState = () => {
        return {...state}
    }

    const dispatch = (action) => {
        if(action instanceof Function) dispatch(action)
        else {
            console.log('action=> ', action);
            state = reducer(state, action)
        }
    }

    // subscribe = () => 전파...

    return {
        getState,
        dispatch,
    }

}

const st = store(counterR);
console.log(st.getState());

st.dispatch({type: 'counter_increase', payload: 100});
console.log(st.getState());

const increaseAction = () => {
    return {type: 'counter_decrease'};
}
st.dispatch(increaseAction(20));
console.log(st.getState());



