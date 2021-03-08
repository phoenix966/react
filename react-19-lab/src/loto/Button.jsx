import React from 'react'
import './Button.sass'

export default function Button(props) {
    return (
            <button className="header__btn" onClick={props.click}>Новые номера</button>
    )
}
