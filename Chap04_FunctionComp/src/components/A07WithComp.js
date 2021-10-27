// A08WithComp.js
import React, { useState } from 'react'

// Comp => Component가 넘어와서 태그로 사용 예정. 따라서 매개변수 이름의 첫 글자가 대문자.
function A07WithComp(Comp, args) {      

    return function InnerComponent(props){

        const [name, setName] = useState('NolBu');
        const changeName = () => setName('HungBu');

        return (
            <div>
                <h3>Inner Component</h3>
                Age: {props.age}<br />
                Args: {args}<br />

                <Comp {...props} name={name} changeName={changeName}/>
            </div>
        )
    }
}
export default A07WithComp