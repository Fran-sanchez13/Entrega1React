import React, { useState } from "react";
import { useTasks } from "../context/taskContext"; 
import {
  TaskContainerStyled,
  TitleStyled, 
  InputContainerStyled, 
  InputStyled, 
  ButtonStyled, 
  TaskListStyled, 
  TaskItemStyled, 
  DeleteButtonStyled, 
  ClearButtonStyled 
  } from "../styles/styledComponents";


const TaskApp = () => {
  const { tasks, addTask, removeTask, clearTasks, error } = useTasks();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput.trim());
      setTaskInput("");
    }
  };

  return (
    <TaskContainerStyled>
      <TitleStyled>Nuctasks</TitleStyled>

      <InputContainerStyled>
        <InputStyled
          type="text"
          placeholder="Que tarea desea agregar?"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <ButtonStyled onClick={handleAddTask}>Agregar</ButtonStyled>
      </InputContainerStyled>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskListStyled>
        {tasks.map((task, index) => (
          <TaskItemStyled key={index}>
            <span>{task}</span>
            <DeleteButtonStyled onClick={() => removeTask(task)}>Eliminar</DeleteButtonStyled>
          </TaskItemStyled>
        ))}
      </TaskListStyled>

      {tasks.length > 0 && <ClearButtonStyled onClick={clearTasks}>Eliminar todas las tareas</ClearButtonStyled>}
    </TaskContainerStyled>
  );
};

export default TaskApp;
