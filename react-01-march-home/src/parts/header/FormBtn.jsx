import React from 'react'
import './formBtn.sass'

export default function FormBtn(props) {
    return (
            <div className="header-btn__wrap">
                <button onClick={props.click} className="header__btn btn">Добавить</button>
            </div>

    )
}
