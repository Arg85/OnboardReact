/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Screen from './Screen'

function Steps(props) {
    const [circle, setCircle] = useState(4)
    const [active, setActive] = useState(0)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(100 / (circle - 0.9) * active)
    }, [circle, active])
    const step = []
    for (let i = 0; i < circle; i++) {
        step.push(<div key={i} className={i <= active || i === 0 ? "circle active" : "circle"}>{i + 1}</div>)
    }
    return (
        <div className='container' >
            <div className="row checkout-steps">
                <div className='progress' style={{ width: `${width}%` }}></div>
                {step}
            </div>
            <div className="mainContent">
                <Screen screenNo={active}></Screen>
                <button className='btnSub' onClick={() => {
                    active >= 3 ? setActive(0) : setActive(active + 1); console.log(active)
                }}>{active === 3 ? "Launch" : "Create Workspace"}</button>

            </div>
        </div>
    )
}

export default Steps