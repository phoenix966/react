import React from 'react'
import './list.sass'

export default function List(props) {

    
    return (
            <li className='list__row'><span>{props.text}</span><span>{props.price}</span><span>{props.area}</span><span>{props.count}</span></li>
    )
}
