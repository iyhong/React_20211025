
import React, { Component } from 'react'

export class A05CreateDOM extends Component {

    constructor(props) {
        super(props);
        this.baseArray = ['NC', '두산', '엘지', 'KT', '키움'];
        this.cnt = 4;
    }

    state = {
        teamOne: '',
        teamTwo: '',
        isChecked: false,
        baseObject:[
            {id: 1, team: 'NC', value: 'NC'},
            {id: 2, team: '두산', value: 'Doosan'},
            {id: 3, team: '엘지', value: 'LG'},
        ]
    };


    changeValue = (evt) => this.setState({[evt.target.name]: evt.target.value});
    addTeam = () => this.setState({baseObject: this.state.baseObject.concat({id: this.cnt++, team: '삼성', value:"Samsung"})});
    showHide = () => this.setState({isChecked: !this.state.isChecked});
    addArray = () => {
        this.baseArray.push('ABC');
        // this.forceUpdate();                 // 강제 제 렌더링
    }

    makeDOM = () => this.baseArray.map((item, index) => (
        <option key={index}>{item}</option>
    ));
    makeTable = () => this.state.baseObject.map( item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.team}</td>
            <td>{item.value}</td>
        </tr>
    ));

    render() {
        return (
            <div>
                <h3>A04 Make DOM</h3>
                
                SelectBox: {this.state.teamOne}<br/>
                <select name="teamOne" className="form-control" onChange={this.changeValue}>
                    <option>선택해주세요</option>
                    { this.baseArray.map( item => <option key={item}>{item}</option>) }
                </select>

                SelectBox: {this.state.teamTwo}<br/>
                <select name="teamTwo" className="form-control" onChange={this.changeValue}>
                    <option value="">선택해주세요</option>
                    { this.makeDOM() }
                </select>

                <table className="table">
                    <thead>
                        <tr>
                            <th>NO</th><th>Team</th><th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.makeTable() }
                    </tbody>
                </table>

                {/* 단일 요소만 묶을 수 있다. */}
                { this.state.isChecked &&
                    <div className="input-group">
                        <input type="text" className="form-control" name="teamOne" value={this.state.teamOne} onChange={this.changeValue} />
                        <button className="btn btn-outline-primary btn-sm">ADD</button>
                    </div>
                }
                <br />
                
                <button className="btn btn-outline-primary btn-sm" onClick={this.addTeam}>ADD TEAM</button>
                <button className="btn btn-outline-primary btn-sm" onClick={this.addArray}>ADD Array</button>
                <button className="btn btn-outline-primary btn-sm" onClick={this.showHide}>{this.state.isChecked ? 'HIDE' : 'SHOW'}</button>
            </div>
        )
    }
}

export default A05CreateDOM
