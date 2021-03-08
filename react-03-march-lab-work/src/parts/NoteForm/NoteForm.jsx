import React from 'react'
import './noteform.sass'

export default function NoteForm(props) {
    return (
        <form onSubmit={props.submit}>
            <div className="form__wrap">
                <div className="form__box">
                    <input onChange={props.change} className="form__text" type="text"  name="text"/>
                </div>
                <div className="form__box">
                    <input onChange={props.change} className="form__number" type="number"  name="price"/>
                </div>
                <div className="form__box">
                    <textarea onChange={props.change} className="form__area" name="area"></textarea>
                </div>
                <button className="form__btn">Добавить</button>
            </div>
        </form>
    )
}
