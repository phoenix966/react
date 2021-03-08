import React from 'react'
import './Gamebutton.sass'

export default function Gamebutton(props) {
    return (
        <>
           <button onClick={props.click} className="gameplay__btn btn">
               <img src={props.img} alt="no-img" className="gameplay__img"/>{props.name}
            </button>
            
        </>
    )
}
