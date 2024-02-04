import React, { useState } from 'react';
import DeleteIcon from '../assets/media/delete.svg';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-app">
      <div className='container'>
        <div className="task-form">
          <input
            type="text"
            placeholder="Write your task here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className='add-btn' onClick={addTask}>+</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
              <span onClick={() => toggleTask(task.id)}> 
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>
                <img src={DeleteIcon} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
