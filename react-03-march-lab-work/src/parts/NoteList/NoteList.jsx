import React from 'react'
import Acordeon from '../UI/Acordeon'
import List from './List'


export default function NoteList(props) {
    let newComponent = props.data
    let newRow = newComponent.map((item)=>{
            return(
                <Acordeon>
                    <List text={item.text} price={item.price} area={item.area} key={item.key}/>
                </Acordeon>
            )       
    })
    return (
        <ul className="list">
           {newRow}
        </ul>
    )
}
