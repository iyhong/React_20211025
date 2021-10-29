// SelectColorContext.js
import { createContext, useState } from 'react'
const SelectColorContext = createContext({
    state: {
        title: 'Select Color Context',
        color: '',
        bgColor: '',
    },
    action: {
        setColor: () => {},
        setBgColor: () => {}
    }
});

function SelectColorContextProvider(props) {
    const [color, setColor] = useState('green');
    const [bgColor, setBgColor] = useState('gray');
    const data = {
        state: {
            title: 'SelectColor Context',
            color: color,
            bgColor,
        },
        action: {
            setColor, setBgColor
        }
    }
    return (
        <SelectColorContext.Provider value={data}>
            {props.children}
        </SelectColorContext.Provider>
    )
}
const SelectColorContextConsumer = SelectColorContext.Consumer;

export { SelectColorContextProvider, SelectColorContextConsumer }
