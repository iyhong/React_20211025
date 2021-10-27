
import React, { useCallback, useEffect, useMemo, useReducer } from 'react'

// state의 변수를 관리할 함수를 정의
const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_NUM':
            let value = Number(action.payload)
            return {...state, num: value}
        case 'CHANGE_STR':
            return {...state, str: action.payload}
        case 'CHANGE_TODAY':
            return {...state, today: action.payload}
        case 'CHANGE_CNT':
            return {...state, cnt: Number(action.payload)}
        case 'ADD_LIST':
            return {...state, list: state.list.concat(state.cnt)}
        default:
            return state;
    }
}
/*
function useReducer(state) {
    var state = {...state};

    function getValue() {
        return {...state}
    }
    function dispatch(action) {
        // {type: 'CHANGE_NUM', payload: evt.target.value}
        if(action.type === 'CHANGE_NUM') {
            stage = {...state, state.num: action.payload}
        }
        state = {...state, type: 'abc' }
        return state;
    }

    return [state, dispach]
}
*/
const A06Hook = () => {
    // 현재 컴퍼넌트에서 사용할 반응형 변수를 모두 일괄 관리하고자 할 목적으로 사용.
    // reducer => dispatch에 의해 호출될 메서드,
    // { value } => reducer 함수의 state예 전달될 값.
    const [data, dispatch] = useReducer(reducer, {
        num: 0,
        str: '',
        today: new Date(),
        cnt: 0,
        list: []
    });

    // 전달할 값만 관리한다.
    const changeValue = useCallback( evt =>  dispatch({type: 'CHANGE_NUM', payload: evt.target.value}), []);
    const changeStr = useCallback( evt => dispatch({type: 'CHANGE_STR', payload: evt.target.value}), []);
    const changeCnt = useCallback( evt => dispatch({type: 'CHANGE_CNT', payload: evt.target.value}), []);
    const addList = useCallback( () => dispatch({type: 'ADD_LIST'}), []);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'CHANGE_TODAY', payload: new Date()})
        }, 3000)
    }, []);

    const getAverage = (ary) => {
        console.log('계산중...');
        if(ary.length === 0) return 0;
        const total = ary.reduce( (sum, x) => sum + x, 0);
        return total / ary.length;
    }
    const getAverageMemo = useMemo(() => {
        return getAverage(data.list);                // 실행할 메서드
    }, [data])                                  // state의 어떤 변수가 변경되는 경우만 새롭게 생성할 것인가를 결정

    return (
        <div>
            <h3>A06. Reducer</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" 
                        value={data.num} onChange={changeValue} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control" 
                        value={data.str} onChange={changeStr} /><br />

                Today: {data.today.toLocaleString()}<br />
                <br />

                Avg: {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control"
                            value={data.cnt} onChange={changeCnt}/>
                        <button className="btn btn-outline-primary btn-sm"
                            onClick={addList}>ADD</button>
                    </div>
                    
                    { data.list.map( (item,i) => <span key={i}>{item} </span>)}
            </div>
        </div>
    )
}

export default A06Hook
