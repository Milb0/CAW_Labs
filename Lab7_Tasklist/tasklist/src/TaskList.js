import React, { useState } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <NewTaskForm onAddTask={handleAddTask} />
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
