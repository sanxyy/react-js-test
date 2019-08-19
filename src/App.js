import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import { Card } from './components/card/card-components';
import { SearchBox } from './components/search-box/search-box-components' 
import './App.css';

class App extends Component{  //extends Component

  constructor() {
    super();  
    //declarative state
    this.state = {
      greeting: 'Greeting, react world',
      monsters: [],
      searchvalue: ''
    };
  }

  componentDidMount() {
     //fetch a json user arrays and set to property monsters 
    //fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:8080/json/user')
    .then( response => response.json())
    .then( users =>  {
      this.setState({monsters:users});
      console.log(users)
    });
  }

  render() {
    //copy searchvalue, monsters as 'destructed element'
    const {searchvalue, monsters } = this.state; 
    //filter monster based on value entered into search box
    const filteredMonster = monsters.filter( 
      monster => monster.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    //button is a built-in component, use setState() to change the property
    return(
     
    <div className="App">
      <header className="App-header">     
          <h1>{this.state.greeting}</h1>
          <h1>filter = {filteredMonster.map( monster =>monster.name+',' )}</h1>
          <SearchBox placeholder='search monster' handlechange={
            e=> {
              this.setState({searchvalue : e.target.value })
            }
          }/>
          
          { /*this.state.monsters.map(monster => <h1> hello, {monster.name} </h1> )*/}
         
        <button onClick ={ () => this.setState({greeting: 'hello clicked'}) }>
         click to change greeting 
        </button>
        {/* pass monsters array to CardList as props*/}
        <CardList monster = { filteredMonster}> 
          { /*
            this.state.monsters.map(
              monster => (                
                <h1 key = {monster.id}> {monster.name}>>> </h1>                
              )
            )*/
            
          }
        </CardList>
        
      </header>   
         
    </div>
    )
  };
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
