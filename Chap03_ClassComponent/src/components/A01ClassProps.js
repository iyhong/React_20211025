// A01ClassProps.js

import React, { Component } from 'react'
import PropCheck from 'prop-types'

export class A01ClassProps extends Component {

    // 속성으로 전달된 값은 내장 props로 받아 처리한다
    // 참조만 가능. 수정 권한은 전달해 준 App가 가지고 있다.
    // App에서 수정 => props의 값 변경 => 사용한 자식 Component가 재 렌더링 => 화면 갱신
    render() {
        return (
            <div>
                <h3>A01 Class Props - 수정 안됨[immutable]</h3>

                <div>
                    Name: {this.props.name}<br />
                    Age: {this.props.age + 100}<br />
                    User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address} <br />
                    Ary: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[10]}<br />
                    onAdd: { this.props.onAdd(10, 20) }<br />
                    Boolean 타입은 화면에 표시되지 않음 <br />
                    isChecked: {this.props.isChecked ? 'TRUE' : 'FALSE'} <br />
                    <br />
                    기본형은 없어도 에러가 아니지만 리퍼런스 타입은 넘어오지 않은 값을 사용하면 에러<br />
                    Num: {this.props.num}<br />
                    Object: {this.props.person.name}
                </div>
            </div>
        )
    }
}

export default A01ClassProps

// 넘어오지 않은 값들을 위해 기본값을 지정할 수 있다 => defaultProps
// 값이 넘어오면 넘어온 값을 사용한다.
A01ClassProps.defaultProps = {
    age: 1000,
    num: 100,
    person: {name: 'unknown'}
}

// 넘어오는 속성의 타입을 체크할 수 있다 => 기본 제공이지만 import 필수
// 교제 101 페이지.
A01ClassProps.propTypes = {
    name: PropCheck.string.isRequired,
    age: PropCheck.number,
    user: PropCheck.object,
    arr: PropCheck.array,
    onAdd: PropCheck.func,
    isChecked: PropCheck.bool,
    num: PropCheck.number,
    person: PropCheck.object
}