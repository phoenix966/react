import React, { Component } from 'react'
import Status from './components/Status'
import './App.sass'
import Icon from './components/Icon'
import Gamebutton from './components/Gamebutton'

export default class App extends Component {
  state={
    aiStat:'none.png',
    playerStat:'none.png',
    status:"Ждём ход игрока Waiting ....",
    comp:0,
    player:0,
    fail:false
  }
  
  genRandomAnswer=()=>{
    let random = Math.floor(Math.random() * 3 + 0)
    let array = ['paper.png','cut.png','stone.png']
    let aiStat = this.state.aiStat
    aiStat = array[random]
    this.setState({aiStat})
    return aiStat
  }

  addNewAnswer=(value)=>{
    let aiStat = this.state.aiStat
    aiStat = 'none.png'
    this.setState({aiStat})
    let playerStat = this.state.playerStat
    playerStat = ''
    this.setState({playerStat})
    playerStat = value
    this.setState({playerStat})
  }

  checkResult=()=>{
    let random = this.genRandomAnswer()
    let aiStat = this.state.aiStat
    aiStat = random
    let playerStat = this.state.playerStat
    let status = this.state.status
    let comp = this.state.comp
    let player = this.state.player
    let fail = this.state.fail

    if(playerStat === aiStat){
      console.log('У Вас ничья')
      status = 'У Вас ничья'
  } else if(
      (playerStat === 'cut.png' && aiStat === 'paper.png')
      || (playerStat === 'paper.png' && aiStat === 'stone.png')
      || (playerStat === 'stone.png' && aiStat === 'cut.png')
      ){
          console.log('Вы выйграли!')
          status = 'Вы выйграли!'
          if(player === 5){
            this.setState({
              fail: true
            })
          } else{
            player++
            this.setState({player})
          }
          
          
  } else{
          console.log("Вы проиграли!")
          status = "Вы проиграли!"
          if(comp === 5){
            this.setState({
              fail: true
            })
          } else{
            comp++
            this.setState({comp})
          }
          
      }
      
    this.setState({status})
    this.setState({aiStat})
    this.setState({playerStat})
  }
  
  render() {
    let fail = this.state.fail
    if(fail){
      return(
        <div className="wrapper">
          <header className="header">
            <div className="container header__container">
              <h3 className="header__title">Игра завершилась</h3>
              <Status text={this.state.status}/>
            </div>
          </header>
        </div>
      )
    } else{
      return (
      <div className="wrapper">
        <header className="header">
          <div className="container header__container">
            <h3 className="header__title">Wellcome in Hell React</h3>
            <Status text={this.state.status}/>
          </div>
        </header>
        <section className="gamebar">
          <div className="container gamebar__container">
              <Icon check={"Игрок: " + this.state.player} img={this.state.playerStat}/>
              <Icon check={"ИИ: " + this.state.comp} img={this.state.aiStat}/>
          </div>
        </section>
        <section className="gameplay">
          <div className="container gameplay__container">
            <Gamebutton click={()=>this.addNewAnswer('paper.png',this.genRandomAnswer)} img="paper.png" name="paper"/>
            <Gamebutton click={()=>this.addNewAnswer('stone.png',this.genRandomAnswer)} img="stone.png" name="stone"/>
            <Gamebutton click={()=>this.addNewAnswer('cut.png',this.genRandomAnswer)} img="cut.png"  name="cut"/>
            <Gamebutton name="play" img="play.png" click={this.checkResult}/>
          </div>
        </section>
      </div>
    )
    }
    
  }
}
