import './App.css';
import React, { Component } from 'react'
import Form from './parts/form/Form';
import Task from './parts/form/task/Task';

export default class App extends Component {
  state={
    text:'', 
    place:[
      // {name: '', id: 0}
    ]
  }

  stopHandler =(event)=>{
    event.preventDefault()
    let text = this.state.text
    let place = [...this.state.place]
    let obj ={
      name:'',
      id:''
    }
    obj.name = text
    obj.id = new Date().getTime()
    place.push(obj)
    // array.name = text
    // array.id = new Date().getTime()
    // let place = []
    // place.push(array)
    this.setState({place})
  }

  addNewElem =(event)=>{
    let text = event.target.value
    this.setState({text: text})  
  }

  deleteElem=(id)=>{
    let copy = [...this.state.place]
    let index = this.state.place.findIndex((task)=>{
      return task.id === id
    })
    copy.splice(index,1)
    this.setState({place: copy})
  }
  
  render() {
    let places = [];
    for(let item of this.state.place) {
      places.push(<Task del={()=> this.deleteElem(item.id)} key={item.id} text={item.name}/>)
    }
    return (
      <div className="App">
        <h1 className="App_title">ToDo list</h1>
          <Form submit={this.stopHandler} change={this.addNewElem}/>
          <div className="container">
            {places}
          </div>
      </div>
    )
  }
}
