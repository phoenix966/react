import React from 'react'
import './loto.sass'

export default function Loto(props) {
    return (
        <div className='loto'>
            <p className="loto__number">{props.num}</p>
        </div>
    )
}
