import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <div className="App">
    <Message />
    {/* <Greet name = "Bruce" heroName = "Batman">
    <p>This is Children Props</p></Greet>
    <Greet name ="Clark" heroName = "Superman">
      <button>Click Me</button>
    </Greet>
    <Greet name=  "Diana" heroName = "Boxman" />
    <Welcome  name = "Bruce" heroName = "Batman" />
    <Welcome name ="Clark" heroName = "Superman" />
    <Welcome  name=  "Diana" heroName = "Boxman" /> */}
    {/* <Hello /> */} 
    </div>
  );
  }
}

export default App;
