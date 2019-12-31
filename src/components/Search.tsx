import React from 'react';
import TodoList from './TodoList';

const Search: React.FC = () => {
    let [newTodo, setNewTodo] = React.useState();

    let [todos, setTodos] = React.useState([{}]);

    let onChangeTodo = (event:any): void => {
        setNewTodo(event.target.value);
    }
    let onButtonSubmit = (event:any) => {
        event.preventDefault();
        setTodos([...todos, {id: Date.now(), text: newTodo}]);
        console.log(todos);
    }

  return (
    <div>
      <form onSubmit={onButtonSubmit}>
          <input type="text" onChange={onChangeTodo}></input>
          <input type="submit"></input>
      </form>
      <TodoList todos={todos}/>
    </div>
  );
}

export default Search;
