import React from 'react'
import './modal.sass'

export default function Modal({stopProp,click,show,children}) {
    let dynamicClass = []
    if(show){
        dynamicClass.push('dark')
    } else {
        dynamicClass.push('dark hide')
    }
    return (
        <div className={dynamicClass.join(' ')} onClick={click}>
            <div className="modal" onClick={stopProp}>{children}</div>
        </div>
    )
}
