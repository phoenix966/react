import React from 'react'
import './row.sass'

export default function Row(props) {
    return (
            <li className="info__item">{props.name} <span>x{props.count}</span><span>[X]</span></li>
    )
}
