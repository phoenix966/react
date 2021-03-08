import './App.css';
// import Person from './Person/Person'
import Card from './Card/Card'
import Card_button from './Card/Card_button';


function App() {
  return (
    <div className="App">
      <div className="container card__container">
        <div className="card">
            <Card name="Tovar 1" text="good tovar" img="tovar.jpg" price="60$"/>
            <Card_button text="Купить"/>
        </div>
        <div className="card">
            <Card name="Tovar 2" text="best tovar" img="tovar2.jpg" price="600$"/>
            <Card_button text="Купить"/>
        </div>
        <div className="card">
            <Card name="Tovar 3" text="good tovar" img="tovar.jpg" price="60$"/>
            <Card_button text="Купить"/>
        </div>
        <div className="card">
            <Card name="Tovar 4" text="good tovar" img="tovar.jpg" price="60$"/>
            <Card_button text="Купить"/>
        </div>
        <div className="card">
            <Card name="Tovar 5" text="good tovar" img="tovar2.jpg" price="600$"/>
            <Card_button text="Купить"/>
        </div>
        <div className="card">
            <Card name="Tovar 6" text="good tovar" img="tovar.jpg" price="600$"/>
            <Card_button text="Продать"/>
        </div>
        <div className="card">
            <Card name="Tovar 7" text="new tovar" img="tovar2.jpg" price="6000$"/>
            <Card_button text="Обновить"/>
        </div>
      </div>
    </div>
  );
}

export default App;
