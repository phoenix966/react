import React from 'react'
import './Status.sass'

export default function Status(props) {
    return (
        <div className='header__panel'>
            <h2 className="header__status">{props.text}</h2>
        </div>
    )
}
