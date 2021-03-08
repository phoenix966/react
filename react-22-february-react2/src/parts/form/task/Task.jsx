import React from 'react'
import './Task.sass'

export default function Task(props) {
    return (
        <div className="task">
            <p className="task__text">{props.text}</p>
            <button onClick={props.del} className="task__btn">Del</button>
        </div>
    )
}
