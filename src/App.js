
import './App.css';
import React, { useEffect, useState } from 'react';
import images from './images';


class Header extends React.Component {
  render(){
    return(
      <header>
        <h1>Memory game made with React</h1>
        <button className="reload" onClick= {() => this.setStatus(getInitialState())}>Reload</button>
      </header>
    ) 
    
  }
}

class Board extends React.Component {
  render(){
    return(
      <div className="board">
        {
          this.props.deck.map((card) => <Card img = {card.img} />)
        }
      </div>

    )
  }
}

class Card extends React.Component {
  render(){
    return(
      <div className="card">
          <div className="hidden">
            <img src= {this.props.img}/>
          </div>

      </div>
    )
  }
}

const getInitialState = () =>{
  const deck = images();
  return{ 
    deck
  }
};

function App() {
  const [status, setStatus] = useState(getInitialState());
  const [flipped, setFlipped] = useState(false);
  const [matched, setMatch] = useState([]);

  return (
    <div className="App">
      <Header deck = {status.deck}/>
      <Board deck = {status.deck} />
    </div>
  );

}



export default App;
