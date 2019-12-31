import React from 'react';
import './App.css';
import Search from './components/Search';


const App: React.FC = () => {
  return (
    <div className="container">
      <h2 className="heading">Todo-list app</h2>
      <div className="App">
      <div className="search">
        <Search />
      </div>
      </div>
    </div>
  );
}

export default App;
