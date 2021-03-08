import React, { Component } from 'react'
import NoteForm from './parts/NoteForm/NoteForm'
import NoteList from './parts/NoteList/NoteList'
import './default.sass'
import Modal from './parts/UI/Modal'

let fields = {
    text:'',
    price:'',
    area:'',
    count:1,
    trigger:false
}
export default class NotePad extends Component {
    state={
        fields,
        array: [
            // {text:'bread',price:'12',area:'lorem ipsum',count:1,key:'id'},
            // {text:'bread',price:'12',area:'lorem ipsum',count:1,key:'id1'}
        ],
        showModal: false  
    }

    onSubmit =(e)=>{
        e.preventDefault()
        this.showModalWindow()
        let array = [...this.state.array]
        let areas = {...this.state.fields}
        let key = new Date().getTime()
        areas.key = key
        // let index = array.findIndex((item)=>{
        //     if(item.text ===)
        // })
        array.push(areas)
        
        this.setState({array})
    }

    onChange =(e)=>{
        let input = e.target.name
        let value = e.target.value
        let fields = {...this.state.fields}
        fields[input] = value
        this.setState({fields})    
    }

    showModalWindow =()=>{
        let showModal = this.state.showModal
        if(showModal){
            this.setState({showModal: false})
        } else{
            this.setState({showModal: true})
        }
    }
    
    stopPropagation=(e)=>{
        e.stopPropagation()
    }
    render() {
        return (
            <div className="wrapper">
                <NoteForm change={(e)=> this.onChange(e)} submit={(e)=> this.onSubmit(e)}/>
                {/* <button onClick={this.showModalWindow} className="btn">Завершить</button> */}
                <NoteList data={this.state.array}/>
                <Modal stopProp={(e)=>this.stopPropagation(e)} click={this.showModalWindow} show={this.state.showModal}>
                    <NoteList data={this.state.array}/>
                </Modal>
            </div>
        )
    }
}
