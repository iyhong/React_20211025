// A02ClassState.js

import React, { Component } from 'react'

export class A02ClassState extends Component {
    constructor() {
        super();

        this.state = {
            name: 'NolBu',
            age: 30,
            user: {name: 'HungBu', age: 20},
            ary: [10,20,30],
            isChecked: true
        }

        // 일반 함수의 this를 변경한 새로운 함수를 등록한다.
        // bind => 지정한 메서드의 this를 설정한 객체로 변경한 후 새로운 메서들 리턴.
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
    };

    /*
    (function(){
        function A() {
            function() changeName{ }        // window
        }
        function() changeName{ }            // function
    })();
    */

    // 함수 기반
    changeName(evt) {
        console.log(evt)
        this.setState({name: 'HungBu'});        // {...this.state, name: 'HungBu'}
    };
    changeAge(num) {
        this.setState({age: num})
    }

    // Arrow 함수 기반 => this 변경작업이 필요없음.
    changeCheck = () => {
        this.setState({isChecked: !this.state.isChecked})
    };

    // Array
    addArray = () => {
        const random = Math.ceil( Math.random() * 100 );
        // this.setState( {ary: this.state.ary.push(random)} );     // Error
        this.setState( {ary: this.state.ary.concat(random)} );
    }
    updateArray = (index, value) => {
        // this.state.ary[index] = value;                           // Error
        // this.setState({ary: this.state.ary[index] = value})      // Error
        const newAry = this.state.ary.map( (item, i) => i === index ? value : item )
        // console.log(newAry === this.state.ary )
        // console.log(newAry, this.state.ary);
        this.setState({ary: newAry});
    }
    deleteArray = (index) => {
        // this.setState({ary: delete this.state.ary[index]})
        const newAry = this.state.ary.filter( (item, i) => index !== i );
        this.setState({ary: newAry});
    };

    addObject = (key, value) => {   // key => 'address'
        // const newAry = this.state.user[key] = value;
        const newUser = {...this.state.user, [key]: value};     // 있으면 덮어쓰기, 없으면 추가
        this.setState({user: newUser})
    }

    updateObject = (key, value) => {   // key => 'address'
        const newUser = {...this.state.user, [key]: value};     // 있으면 덮어쓰기, 없으면 추가
        this.setState({user: newUser})
    }

    deleteObject = (key) => {           // key => 'address'
        delete this.state.user[key];                            // 기존 주소값에서 해당 항목만 삭제
        this.setState({user: {...this.state.user}})             // 남아있는 요소만 새롭게 객체로 만들어 대입
    }

    render() {
        return (
            <div>
                <h3>A02 Class State - 수정 가능 변수 [mutable]</h3>

                <div>
                    Name: {this.state.name}<br />
                    Age: {this.state.age}<br />
                    User: {this.state.user.name} / {this.state.user.age} / {this.state.user.address}<br />
                    Array: {this.state.ary[0]} / {this.state.ary[1]} / {this.state.ary[2]} / {this.state.ary[3]}<br />
                    isChecked: {this.state.isChecked ? 'TRUE' : 'FALSE'}<br />
                </div>
                <br />

                { this.state.ary.map( (item, i) => <span key={i}>{item}{' '}</span>) }

                <div>
                    <button onClick={this.changeName}>Name</button>
                    <button onClick={ () => this.changeAge(100) }>Age</button>
                    <button onClick={this.changeCheck}>isChecked</button>

                    <button onClick={this.addArray}>Add Array</button>
                    <button onClick={ (evt) => this.updateArray(0, 1000) }>Update Array</button>
                    <button onClick={ () => this.deleteArray(0) }>Delete Array</button>

                    <button onClick={ () => this.addObject('address', 'Seoul') }>Add Object</button>
                    <button onClick={ () => this.updateObject('address', 'Busan') }>Update Object</button>
                    <button onClick={ () => this.deleteObject('address') }>Delete Object</button>
                </div>
            </div>
        )
    }
}

export default A02ClassState
