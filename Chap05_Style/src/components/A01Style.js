
import React from 'react'
import './css/A01Style.css'
import './css/A01Style.scss'        // npm i node-sass(설치후 프로젝트 리 스타트)

function A01Style() {
    
    const csName = 'title color';
    const myStyle = {
        backgroundColor: 'aqua',
        color: 'black',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px',
    }

    return (
        <div>
            <h3 className="title color">A01 Style</h3>
            <h3 className={csName}>A01 Style</h3>
            <h3 className="scssTitle">A01 Style</h3>
            <h3 style={myStyle}>A01 Style</h3>
            {/* 직접 기술하는 경우는 {{}} 형태가 된다. */}
            <h3 style={{        
                backgroundColor: 'aqua',
                color: 'black',
                fontSize: '24pt',
                fontWeight: 'bold',
                padding: '20px',
            }}>A01 Style</h3>
        </div>
    )
}

export default A01Style
