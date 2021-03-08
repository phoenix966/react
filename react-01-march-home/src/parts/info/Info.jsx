import React from 'react'
import Row from './Row'

export default function Info(props) {
    let {array,count,text,copy} = props
    let newNum = 1
    let copyArray = [...copy]
    copyArray.push(count)
    let plus = copyArray.reduce((item,current)=>{
        return item + current
    })
    console.log("it" + plus);
    let newComponent = array.map(item => {
        if(item.text === text){
            return <Row name={item.text} key={item.text} count={plus++}/>
        } else{
            return <Row name={item.text} key={item.text} count={newNum}/>
        }
    })
    return (
        <div className="container">
            <div className="info">
            <ul className="info__row">
                {newComponent}
            </ul>
            </div>
        </div>
    )
}
