
import React, { useRef, useState } from 'react'

function A04CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    const [baseObject, setBaseObject] = useState([
        {id: 1, team: 'NC', value: 'NC'},
        {id: 2, team: '두산', value: 'Doosan'},
        {id: 3, team: '엘지', value: 'LG'},
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        isChecked: false,
    });
    // let cnt = 4;

    // useRef => DOM 참조. 기본형 변수의 값 유지(리 렌더링되어도 변경된 값을 그대로 유지 할 목적)
    const cnt = useRef(4);

    const changeValue = (evt) => setData({...data, [evt.target.name]: evt.target.value});
    const addTeam = () => setBaseObject(baseObject.concat({id: cnt.current++, team: '삼성', value:"Samsung"}))
    const showHide = () => setData({...data, isChecked: !data.isChecked})

    const makeOption = () => baseObject.map( item => (
        <option key={item.id} value={item.value}>{item.team}</option>
    ));

    return (
        <div>
            <h3>A04 Make DOM</h3>
            
            SelectBox: {data.teamOne}<br/>
            <select name="teamOne" className="form-control" onChange={changeValue}>
                <option>선택해주세요</option>
                { baseArray.map( item => <option key={item}>{item}</option>)}
            </select>

            SelectBox: {data.teamTwo}<br/>
            <select name="teamTwo" className="form-control" onChange={changeValue}>
                <option value="">선택해주세요</option>
                { makeOption() }
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    { baseObject.map( item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.team}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { data.isChecked &&
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm">ADD</button>
                </div>
            }
            <br />
            
            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A04CreateDOM
