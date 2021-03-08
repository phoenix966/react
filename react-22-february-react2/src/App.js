import './App.css';
import './parts/form/Form'
import './parts/form/task/Task'

import React, { Component } from 'react'
import Form from './parts/form/Form';
import Task from './parts/form/task/Task';

export default class App extends Component {
  state = {
   temp:'', // промежуточная переменная содержащая наш текст из инпута
   place:[
     
   ]

  } 
  stopSubmit =(event)=>{
    event.preventDefault()
    let obj = {name:this.state.temp,id: new Date().getTime()};
    let place = [...this.state.place]
    place.push(obj)
    this.setState({place: place})
  }

  changeHandler =(event)=>{
    let info = event.target.value
    this.setState({
      temp:info
    })
  }

  delElement =(id)=>{
    // let index = this.state.place.findIndex((task)=>{ // цикл возвращает порядковый индекс
    //   return task.id === id // проверяет на совпадение индекса
    // })
    // let copy = [...this.state.place]
    // copy.splice(index,1) // удаляет ячейку массива
    // this.setState({place: copy}) // возвращаем измененный объект - первый параметр: ключ в state ,второй: массив
    let place = this.state.place.filter(item => item.id !== id); // фильтрует по id
    this.setState({place})
  }

  render() {
    return (
      <div className="App">
          <h1 className="app__task">Список задач</h1>
          <Form submit={this.stopSubmit} change={this.changeHandler}/>
          <div className="container">
            {this.state.place.map(task => { // делает копию стейта place
              return <Task del={() => this.delElement(task.id)} key={task.id} text={task.name}/> //Функция возвращает изменный массив
            })}
          </div>
      </div>
    )
  }
}

