
import React, { useCallback, useEffect, useRef, useState } from 'react'

const A05Hook = () => {

    // 반응형 변수 관리
    const [data, setData] = useState({
        num: 0,
        str: ''
    });
    const [today, setToday] = useState(new Date());
    const [cnt, setCnt] = useState('');
    const [list, setList] = useState([]);

    // DOM과의 연결
    const numRef = useRef();
    
    // 리 렌더링이 되더라도 값을 유지하고자 할 목적
    // const cnt = useRef(1);

    // mount, update life cycle
    // state 관리하는 변수의 값이 어떤것이든 변경되서 화면이 갱신되면 useEffect를 다시 실행한다 => shouldComponentUpdate
    useEffect( () => {
        console.log('setTimeout useEffect')
        setTimeout( () => {
            setToday(new Date())
        }, 3000);
    }, [data])          // [] => state의 변경값을 감시하지 않음. => componentDidMoust
    // [data] => state에 data 값이 변경된 경우만 실행.

    useEffect( () => {
        console.log('numRef useEffect')
        numRef.current.style.backgroundColor = 'orange';
    }, [])

    // Event 함수를 관리하는 Hook. 화면이 리 렌더링되는 경우 이 Event 함수를 새롭게 생성할 것인가를 결정.
    // data 값이 변경되는 경우만 이 함수를 새롭게 작성한다.
    const changeValue = useCallback( evt => setData( {...data, [evt.target.name]: evt.target.value} ), [data]);

    // 실행 구문에서 state 변수를 참조하지 않는다. 그러니 한번 작성되고 난 후 새롭게 만들어질 필요가 없음.
    // []에 의존 state 변수를 정의하지 않으면 최초에 1번만 만들어진다.
    const changeCnt = useCallback( evt => setCnt(evt.target.value), []);

    const addList = useCallback( () => setList(list.concat(cnt)), [cnt, list] );

    return (
        <div>
            <h3>A05. useState, useEffect</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" ref={numRef}
                        value={data.num} onChange={changeValue} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control" 
                        value={data.str} onChange={changeValue} /><br />

                Today: { today.toLocaleString() }<br />
                <br />

                Avg: {cnt}
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"
                            value={cnt} onChange={changeCnt}/>
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
                    { list.map( (item,i) => <span key={i}>{item} </span>)}
            </div>
        </div>
    )
}

export default A05Hook
