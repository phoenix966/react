import React from 'react'
import './Icon.sass'

export default function Icon(props) {
    return (
        <div className="gamebar__box">
            <div className="gamebar__wrap">
                <img className="gamebar__img" src={props.img} alt="no-img"/>
            </div>
            <h5 className="gamebar__check">{props.check}</h5>
        </div>
    )
}
