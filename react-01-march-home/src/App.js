import React, { Component } from 'react'
import './App.sass'
import Footer from './parts/footer/Footer'
import Header from './parts/header/Header'
import Info from './parts/info/Info'

export default class App extends Component {
  state={
    text:'',
    num:0,
    array:[],
    count: 0,
    copy:[]
  }
  changeNum =(e)=>{
    let num = this.state.num
    let event = e.target.value
    num = event
    this.setState({num})
  }
  changeText =(e) =>{
    let text = this.state.text
    let event = e.target.value
    text = event
    this.setState({text})
  }
  // fixSubmit =(e)=>{
  //   e.preventDefault()
  //   let {text,num} = this.state;
  //   let array = [...this.state.array];
  //   if(array.length === 0) {
  //     let obj = {text,num,count: 1}
  //     array.push(obj);
  //   } else {
      
  //     array = this.state.array.map(item => {
  //       if(text === item.text) {
  //         return {
  //           ...item,
  //           count: item.count + 1
  //         }
  //       } else {
  //         return {text,num,count: 1}
  //       }
  //     });
  //   }
  //   console.log(array);
  //   // let obj = {text,num,count}
  //   // array.push(obj)
  //   this.setState({array})
  // }

  fixSubmit =(e)=>{
    e.preventDefault()
    let {text,num} = this.state
    let array = [...this.state.array]
    let obj = {
      text: text,
      num: num,
      count: 0
    }

    array.push(obj)
    this.setState({array})
  }
  render() {
    return (
      <div className='Wrapper'>
        <Header 
        submit={(e)=>this.fixSubmit(e)}
        onchange={(e) => this.changeNum(e)}
        onchangeText={(e)=>this.changeText(e)}
        state={this.state}
        click={this.fixSubmit}
        />
        <Info {...this.state}/>
        <Footer state={this.state}/>
      </div>
    )
  }
}

