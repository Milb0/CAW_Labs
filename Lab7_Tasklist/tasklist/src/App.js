import React from 'react';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Tasklist Application</h1>
      <TaskList />
    </div>
  );
};

export default App;
