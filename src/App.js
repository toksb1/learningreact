import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent  from './components/learning-examples/SecondComponent'
import Counter  from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      <TodoApp/>
    
    </div>
  );
 }


// Class component 

class LearningComponent extends Component {
  render() {
    return (
    <div className="LearningComponent">
     My Hello world
     <FirstComponent/>
     <SecondComponent/>
     <ThirdComponent/>
    </div>
    );

  }

}


export default App;
