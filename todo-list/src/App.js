import './App.css';
import React from 'react';
import TodoList from './Components/TodoList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos:[
              {id:1, task: 'Take out the trash', complete: false},
              {id:2, task: 'Feed The Cats', complete: false},
              {id:3, task: 'Make copies of the house keys', complete: false},
            ]
    }
  }

  render(){
    return (
      <div className="App">
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
