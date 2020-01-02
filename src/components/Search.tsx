import React from 'react';

const Search: React.FC = () => {
    //set state hooks
    let [newTodo, setNewTodo] = React.useState();
    let [todos, setTodos] = React.useState([{}]);
    // get input value
    let onChangeTodo = (event:any): void => {
        setNewTodo(event.target.value);
    }
    // update state on button submit
    let onButtonSubmit = (event:any) => {
        event.preventDefault();  
        postTodos({text:newTodo});
        window.location.reload();
    }
    // delete todo
    let deleteTodo = (id: number) =>
  {
      fetch('http://localhost:4000/'+ id, {
          method: "DELETE",
          mode: "cors",
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
      })
      .then(response => console.log(response))
      window.location.reload();
    }

    // sort out the todos in li
     let li = todos.map((todo:any): any => {
        return <li key={todo.id}>{todo.text}{" "}<button onClick={() => deleteTodo(todo.id)}>X</button></li>   
        })
     
    // delete all todos
    let delAllTodos = () => {
        fetch('http://localhost:4000/', {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => setTodos([response.data]))
    }
    React.useEffect(() => {
        fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(response => setTodos(response.data))
    },[]);
    console.log(todos);

    function postTodos(data:any){
        fetch('http://localhost:4000/add', {
            method: "post",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .catch((error) => {
            console.error('Error:', error);
        });
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
