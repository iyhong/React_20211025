// A01FuncProps.js
import React from 'react'
import PropsCheck from 'prop-types'

function A01FuncProps(props) {      // props를 매개변수로 주입받아 사용해야 한다.

    // 묶어 사용도 가능하고 분리 사용도 가능.
    const { name, age, user, arr, onAdd, isChecked, num, person } = props;
    const { children } = props;

    return (
        <div>
            <h3>A01 Function Props</h3>

            <div>
                String: {props.name}<br />
                Number: {props.age}<br />
                Object: {props.user.name} / {props.user.age} / {props.user.address}<br />
                Array: {props.arr[0]} / {props.arr[1]} / {props.arr[2]} / {props.arr[3]}<br />
                Method: {props.onAdd(10, 20)}<br />
                Boolean: {props.isChecked ? 'T' : 'F'}<br />
                Num: {props.num} <br />
                Person: {props.person.name}<br />
                <br />

                { props.children }
            </div>
            <br />

            <div>
                String: {name}<br />
                Number: {age}<br />
                Object: {user.name} / {user.age} / {user.address}<br />
                Array: {arr[0]} / {arr[1]} / {arr[2]} / {arr[3]}<br />
                Method: {onAdd(10, 20)}<br />
                Boolean: {isChecked ? 'T' : 'F'}<br />
                Num: {num} <br />
                Person: {person.name}<br />
                <br />

                {children}
            </div>
        </div>
    )
}
export default A01FuncProps

// 기본값
A01FuncProps.defaultProps = {
    num: 100,
    person: {name: 'BangJa'}
}

// 타입 체크. => import PropsCheck from 'prop-types' 필요
A01FuncProps.propTypes = {
    name: PropsCheck.string.isRequired,
    age: PropsCheck.number,
}