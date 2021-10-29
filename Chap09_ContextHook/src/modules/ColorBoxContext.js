// ColorBoxContext.js
import {createContext} from 'react'

// 구조만 작성한다. Provider가 실질적인 값을 할당.
const ColorBoxContext = createContext({
    title: '',
    color: '',
})
export default ColorBoxContext;
