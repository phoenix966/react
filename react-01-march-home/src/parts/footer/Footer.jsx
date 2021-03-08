import React from 'react'
import Price from './Price'

export default function Footer(props) {
    let {num} = props.state
    let array = []
    array.push(num)
    let summ = array.reduce((item,current)=>{
        return item + current
    })
    return (
        <div className="container">
            <div className="footer">
                <Price num={summ}/>
            </div>
        </div>
    )
}
