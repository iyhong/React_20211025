
import React, { useEffect, useRef, useState } from 'react'

function A03FuncEvent() {

    // useState => 반응형 변수 관리 Hook
    const [data, setData] = useState({
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'baseball',
        isChecked: true,
        language: new Set(['Angular', 'React']),
        baseball: 'NC',
        four: []
    });

    // DOM에 Access 가능한 참조 변수 생성. class 컴퍼넌트의 createRef()
    // 연결하고자 하는 HTML 요소에 ref={nameRef} 형태로 추가 필요.
    const nameRef = useRef();
    const ageRef = useRef();

    // class의 mounted, update 라이프 사이클
    useEffect( () => {
        console.log('Life Cycle Mounded or Update');
        nameRef.current.style.backgroundColor = 'lightgreen';
    }, []);         // [] => state의 변경 값을 체크하지 않겠다. 즉 처음 로드될때 1번만 실행.

    const changeString = evt => setData( {...data, [evt.target.name]: evt.target.value} );
    const changeNumber = evt => setData( {...data, [evt.target.name]: Number(evt.target.value)} );
    const changeCheck = () => setData( {...data, isChecked: !data.isChecked} );
    const changeCheckBox = evt => {
        const value = evt.target.value;
        if(data.language.has(value)) {
            data.language.delete(value);
        } else {
            data.language.add(value);
        }

        const newSet = new Set( Array.from(data.language) );
        setData( {...data, language: newSet } );
    }
    const changeSelectBox = evt => {
        const elem = evt.target.selectedOptions;
        const value = [...elem].map( item => item.value );
        setData( {...data, four: value} )
    }
    const sendData = evt => {
        evt.preventDefault();
        const value = {
            ...data,
            language: Array.from(data.language)
        }
        console.log(value);

        // ref 참조
        ageRef.current.style.color = 'red';
        ageRef.current.style.backgroundColor = 'lightgray';
        nameRef.current.focus();
    }

    return (
        <div>
            <h3>A03 Function Component Event & Form</h3>

            <form>
                Name: {data.name}
                    <input type="text" name="name" className="form-control" ref={nameRef}
                        value={data.name} onChange={changeString} />
                Age: {data.age}
                    <input type="text" name="age" className="form-control" ref={ageRef}
                        value={data.age} onChange={changeNumber} />
                Date: {data.date}
                    <input type="date" name="date" className="form-control"
                        value={data.date} onChange={changeString}  />

                RadioButton: {data.sports}<br />
                    <div className="form-check">
                        <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                            onChange={changeString} defaultChecked={data.sports === 'baseball'} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
                            onChange={changeString} defaultChecked={data.sports === 'soccer'}  />
                        <label htmlFor="soccer" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
                            onChange={changeString} defaultChecked={data.sports === 'basketball'}  />
                        <label htmlFor="basketball" className="form-check-label">농구</label>
                    </div>

                CheckBox One: {data.isChecked ? '동의' : '동의 안함'} <br />
                    <div className="form-check">
                        <input type="checkbox" id="check" className="form-check-input" 
                            value={data.isChecked} onChange={changeCheck} 
                            defaultChecked={data.isChecked === true } />
                        <label htmlFor="check" className="form-check-label">동의</label>
                    </div>

                CheckBox: { Array.from(data.language) }<br />
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                            onChange={changeCheckBox} defaultChecked={data.language.has('Angular')} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                            onChange={changeCheckBox} defaultChecked={data.language.has('React')} />
                        <label htmlFor="react" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                            onChange={changeCheckBox} defaultChecked={data.language.has('Vue')} />
                        <label htmlFor="vue" className="form-check-label">농구</label>
                    </div>

                SelectBox: {data.baseball} <br/>
                    <select name="baseball" className="form-control" 
                        value={data.baseball} onChange={changeString} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                
                SelectBox Multi: {data.four}<br />
                    <select name="four" multiple size="3" className="form-control" 
                        onChange={changeSelectBox}>
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                    <br />

                <button type="submit" onClick={sendData}>SEND</button>
            </form>
        </div>
    )
}

export default A03FuncEvent
