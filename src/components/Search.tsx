import React from 'react';



const Search: React.FC = () => {
    let [newTodo, setNewTodo] = React.useState();

    let [todos, setTodos] = React.useState([{}]);

    let onChangeTodo = (event:any): void => {
        setNewTodo(event.target.value);
    }
    let onButtonSubmit = (event:any) => {
        event.preventDefault();
        if(todos === []){
            return;
        }else{
          setTodos([...todos, {id: Date.now(), text: newTodo}]);  
        }
        
    }

    let deleteTodo = (id: any) =>
  {
      const delTodo = [...todos]

      const deletedTodo = delTodo.filter((item:any) => item.id !== id);

        setTodos(deletedTodo);
  }


    let li = todos.map((todo:any): any => {
        return <li key={todo.id}>{todo.text}{" "}<button onClick={() => deleteTodo(todo.id)}>X</button></li>
    } ) 

    let delAllTodos = () => {
        setTodos([{}]);
    }
    

  return (
    <div>
      <form onSubmit={onButtonSubmit}>
          <input type="text" onChange={onChangeTodo}></input>
          <input type="submit"></input>
      </form>
      <ul>
          {li}
      </ul>
      <button onClick={delAllTodos}>Clear list...</button>
    </div>
  );
}

export default Search;
