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
        setTodos([ {text: newTodo}, ...todos]);
          
        postTodos(todos.map((todo:any) => todo.text));

        
    }
    // delete todo
    let deleteTodo = (id: any) =>
  {
      const delTodo = [...todos]
      const deletedTodo = delTodo.filter((item:any) => item.id !== id);
        setTodos(deletedTodo);
  }

    // sort out the todos in li
     let li = todos.map((todo:any): any => {
        return <li key={todo.id}>{todo.text}{" "}<button onClick={() => deleteTodo(todo.id)}>X</button></li>   
        })
     
    // delete all todos
    let delAllTodos = () => {
        setTodos([{id:Date.now(), text:""}]);
    }
    React.useEffect(() => {
        fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(response => setTodos(response.data))
    }, []);

    function postTodos(data:any){
        fetch('http://localhost:4000/add', {
            method: "post",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              },
            body: JSON.stringify(data)
        })
        .then(data => console.log("dette er dataene", data))
        .catch(err => console.error(err))
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
