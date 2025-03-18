import { createContext, useState, useContext } from "react";


const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  
  const addTask = (task) => {
    if (tasks.includes(task)) {
      setError("Tarea existente");
      return;
    }
    setTasks([...tasks, task]);
    setError(""); 
  };

 
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

 
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks, error }}>
      {children}
    </TaskContext.Provider>
  );
};


export const useTasks = () => useContext(TaskContext);
