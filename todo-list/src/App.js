import './App.css';
import React from 'react';
import Todo from './Components/TodoList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todos:[
              {id:1, task: 'Take out the trash', complete: false},
              {id:2, task: 'Take out the trash', complete: false},
              {id:3, task: 'Take out the trash', complete: false},
            ]
    }
  }

  render(){
    return (
      <div className="App">
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
