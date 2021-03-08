import React from 'react'
import './Form.sass'

export default function Form(props) {
    return (
        <form onSubmit={props.submit}>
            <div className="container form__container">
                <div className="form__wrap">
                    <input onChange={props.change} className="form__input" type="text" placeholder="Add new task"/>
                </div>
                <button className="form__btn">Add Task</button>
            </div>
        </form>
    )
}
