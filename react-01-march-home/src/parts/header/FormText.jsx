import React from 'react'
import './formtext.sass'

export default function FormText(props) {
    return (
        <div className='header-form__wrap'>
            <input onChange={props.change} className="header-text__input" type="text" placeholder="Наименование товара"/>
        </div>
    )
}
