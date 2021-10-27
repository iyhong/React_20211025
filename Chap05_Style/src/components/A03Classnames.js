
import React from 'react'
import cns from 'classnames'
// npm i classnames

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
    
    const text = 'text';
    const isChecked = true;

    return (
        <div>
            <h3 className={cns('bg', 'text', 'space')}>A03 ClassNames Module</h3>
            <h3 className={cns('bg', text, 'space')}>A03 ClassNames Module</h3>
            <h3 className={cns('bg', {text: isChecked, 'space': isChecked} )}>A03 ClassNames Module</h3>
            <h3 className={ cns(two.title, { [two.reverse]: isChecked}) }>A03 ClassNames Module</h3>
            <br />
            <h3 className={isChecked ? 'bg' : ''}>A03 ClassNames Module</h3>
        </div>
    )
}

export default A03Classnames;
