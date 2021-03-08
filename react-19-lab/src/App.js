import React, { Component } from 'react'
import Button from './loto/Button'
// import Button from './loto/Button'
import Loto from './loto/loto'



export default class App extends Component {
state={
  numbers: [
    {number1: 0,number2: 0,number3: 0,number4: 0,number5: 0}
  ]
}

//Правильный способ решения:
// state={
// 	lottery: [0,0,0,0,0]
// }

// generateNumbers = () => {
// 	const lottery = [];
// 	while(lottery.length < 5){
// 		let random = Math.floor(Math.random() * 36 + 1);
// 		if(!lottery.includes(random)){
// 			lottery.push(random)
// 		}
// 	}
// }
// lottery.sort((num1,num2) =>{
// 	return num1-num2;
// })
  // this.setState(lottery)
//
generateRandomNum = () => {
  let number = 0
  number = Math.floor(Math.random() * 36 + 1)
  return number
}
drawResult = () => {
  let numbers = {...this.state.numbers}
  for(let key in numbers[0]){
    numbers[0][key] = 0
    numbers[0][key] += this.generateRandomNum()
  }
  let array = Object.values(numbers[0])
  array.sort(( a, b ) =>  a - b); 
  let dataObj = {
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0
  }
  let i = 0;
  for(let key in dataObj){
    dataObj[key] = array[i]
    if(dataObj[key] === array[i]){
      dataObj[key] = this.generateRandomNum()
    }
    i++
  }
  let newArray = []
  newArray[0] = dataObj
  console.log(newArray)
  this.setState({numbers: newArray}) 
}

  render() {
    return (
      <div className="App">
        <div className="header">
            <h1 className="header__title">Лотерея 1 из 36</h1>
            {/* <button className="Button" onClick={this.drawResult}>Новые номера</button> */}
            <Button click={this.drawResult}/>
        </div>
          <div className="container loto__container">
            <Loto num={this.state.numbers[0].number1}/>
            <Loto num={this.state.numbers[0].number2}/>
            <Loto num={this.state.numbers[0].number3}/>
            <Loto num={this.state.numbers[0].number4}/>
            <Loto num={this.state.numbers[0].number5}/>
          </div>
      </div>
    )
  }
}
