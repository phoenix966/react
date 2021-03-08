import React from 'react'
import './formnum.sass'

export default function FormNum(props) {
    return (

            <div className="header-num">
                <div className="header-form__box">
                    <input onChange={props.change} className="header-num__input" type="number" placeholder="Цена"/>
                </div>
                <p className="header__text">СОМ</p>
            </div>
    )
}
