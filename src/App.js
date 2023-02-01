import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos : [
        { id: 1, text: 'Telule' },
        { id: 2, text: 'Urra' },
        { id: 3, text: 'Manuel' },
      ],

      newTodo : '',
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Hola React</h1>
          <ul>
            {this.state.todos.map((todo) => {

              return <TodoItem text={todo.text} />
            })}


          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        
          <form onSubmit={this.handleSubmitTelule}>
            <input type="text" value={this.state.newTodo} onChange={this.handleChangeTelule}/>
            <button type="submit">add TODO</button>
          </form>
        </header>
      </div>
    );
  }

    handleChangeTelule = (event) => {
      this.setState = ({ newTodo: event.target.value});
    }

    handleSubmitTelule = event => {
      event.preventDefault();
      this.setState( (prevState)=>({
          todos: [],
          newTodo: '',

      } ));
    }
}

export default App;
