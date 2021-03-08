import {Component} from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    people: [
    {name: 'Mike Wazovski', age: 25, prof: 'Программист'},
    {name: 'John Dawson', age: 35, prof: 'Дизайнер'}
    ]
    }
  render() {
    return(
      <div className="App">
        <Person name='Mike'/>
        
      </div>
    );
  }
}

export default App;