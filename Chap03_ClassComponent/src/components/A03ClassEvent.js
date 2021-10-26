
import React, { Component, createRef } from 'react'

export class A03ClassEvent extends Component {

    constructor() {
        super();

        // DOM에 속성으로 할당해서 지정한 이름으로 참조할 수 있는 변수를 생성한다.
        this.nameRef = createRef();
        this.ageRef = createRef()
    }

    state = {
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'baseball',
        language: new Set(['Angular']),     // 중복 데이터를 허용하지 않는다.
        isChecked: false,
        baseball: 'NC',
        four: [],
    };

    sendData = (evt) => {
        evt.preventDefault();           // DOM이 가지고 있는 내장 JavaScript 기능을 OFF.
        // Ajax로 서버에 전송
        // console.log(this.state);
        const data = {
            ...this.state,
            language: Array.from(this.state.language)
        };
        console.log(data);

        this.ageRef.current.style.color = 'red'
    }
    
    changeName = (evt) => {
        console.log(evt.target);        // Event를 발생시킨 DOM 자체를 의미한다.
        if(evt.target.name === '') alert('값이 없습니다.')
        this.setState({name: evt.target.value})
    }

    changeNumber = (evt) => {
        let value = Number(evt.target.value);
        if(isNaN(value)) value = 0;
        this.setState( { [evt.target.name]: value} );
    }
    changeString = (evt) => {
        // 적절한 가드는 구현해야 한디.
        this.setState( {[evt.target.name]: evt.target.value} );
    };

    changeCheck = () => {
        this.setState({isChecked: !this.state.isChecked})
    };

    changeCheckBox = (evt) => {
        const value = evt.target.value;
        if(this.state.language.has(value)) {
            this.state.language.delete(value);      // 주소값이 변경되지 않고 기존의 데이터를 조작 
        } else {
            this.state.language.add(value);
        }
        const newSet = new Set( Array.from(this.state.language) );
        this.setState({language: newSet})
    };

    changeSelectBox = (evt) => {
        const elem = evt.target.selectedOptions;
        // console.log(elem)
        const data = [...elem].map( item => item.value );
        // console.log(data);
        this.setState({four: data});
    };

    componentDidMount() {
        console.log('돔 다 만들어짐..');
        // console.log(this.nameRef.current)
        this.nameRef.current.style.background = 'lightgreen';
        // this.nameRef.current.focus();        // 필요하시면 주석 해제하세요
    }


    render() {
        return (
            <div>
                <h3>A03 Class Component Event & Form</h3>

                <form>
                    Name: {this.state.name}
                        <input type="text" name="name" className="form-control" ref={this.nameRef}
                            value={this.state.name} onChange={this.changeName} />
                    Age: {this.state.age} 
                        <input type="text" name="age" className="form-control" ref={this.ageRef}
                            value={this.state.age} onChange={this.changeNumber} />
                    Date: {this.state.date}
                        <input type="date" name="date" className="form-control" 
                            value={this.state.date} onChange={this.changeString}/>

                    RadioButton: {this.state.sports}<br />
                        <div className="form-check">
                            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                                 onChange={this.changeString}  defaultChecked={this.state.sports === 'baseball'} />
                            <label htmlFor="baseball" className="form-check-label">야구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                                onChange={this.changeString}  defaultChecked={this.state.sports === 'soccer'} />
                            <label htmlFor="soccer" className="form-check-label">축구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                                onChange={this.changeString}  defaultChecked={this.state.sports === 'basketball'} />
                            <label htmlFor="basketball" className="form-check-label">농구</label>
                        </div>

                    CheckBox One: {this.state.isChecked ? '동의' : '동의 안함'}<br />
                        <div className="form-check">
                            <input type="checkbox" id="check" className="form-check-input" 
                                value={this.state.isChecked} onChange={this.changeCheck} />
                            <label htmlFor="check" className="form-check-label">동의</label>
                        </div>

                    CheckBox: { Array.from(this.state.language) } <br />
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                                onChange={this.changeCheckBox} defaultChecked={this.state.language.has("Angular")} />
                            <label htmlFor="baseball" className="form-check-label">앵귤러</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
                                onChange={this.changeCheckBox} defaultChecked={this.state.language.has("React")} />
                            <label htmlFor="react" className="form-check-label">리엑트</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                                onChange={this.changeCheckBox}  defaultChecked={this.state.language.has("Vue")}/>
                            <label htmlFor="vue" className="form-check-label">뷰</label>
                        </div>

                    SelectBox: {this.state.baseball}<br/>
                        <select name="baseball" className="form-control"
                            value={this.state.baseball} onChange={this.changeString} >
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    
                    SelectBox Multi: {Array.from(this.state.four) }<br />
                        <select name="four" multiple size="3" className="form-control"
                            onChange={this.changeSelectBox} >
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    <br />

                    <button type="submit" onClick={this.sendData}>SEND</button>
                </form>
            </div>
        )
    }
}

export default A03ClassEvent
