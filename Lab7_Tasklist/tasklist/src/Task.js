import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
  const [subtasks, setSubtasks] = useState([]);
  const [newSubtask, setNewSubtask] = useState('');

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { text: newSubtask, completed: false }]);
    setNewSubtask('');
  };

  const handleDeleteSubtask = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleToggleSubtask = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index].completed = !updatedSubtasks[index].completed;
    setSubtasks(updatedSubtasks);
  };

  const isSubtaskCompleted = (subtask) => subtask.completed;

  return (
    <div className="task-container">
      <div className="task-content">
        <div>{task}</div>
        <button onClick={() => onDelete(task)}>Delete</button>
      </div>
      <div className="subtasks-container">
        {subtasks.map((subtask, index) => (
          <div
            key={index}
            className={`subtask ${isSubtaskCompleted(subtask) ? 'completed' : ''}`}
          >
            <span>{subtask.text}</span>
            <button onClick={() => handleToggleSubtask(index)}>
              {isSubtaskCompleted(subtask) ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => handleDeleteSubtask(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-subtask">
        <input
          type="text"
          placeholder="Add subtask"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
        />
        <button onClick={handleAddSubtask}>Add</button>
      </div>
    </div>
  );
};

export default Task;
