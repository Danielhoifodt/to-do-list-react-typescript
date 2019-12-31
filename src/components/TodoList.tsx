import React from 'react';


const TodoList: React.FunctionComponent<any> = (props) => {


    
    let li = props.todos.map((todo:any, index:number): any => {
        return <li key={index}>{todo.text}</li>
    } ) 
    
    
  return (
    <div>
      <ul>
          {li}
      </ul>
    </div>
  );
}

export default TodoList;
