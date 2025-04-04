import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, clearTasks } from "../redux/taskSlice";
import {
  TaskContainerStyled,
  TitleStyled,
  InputContainerStyled,
  InputStyled,
  ButtonStyled,
  TaskListStyled,
  TaskItemStyled,
  DeleteButtonStyled,
  ClearButtonStyled,
} from "../styles/styledComponents";

const TaskApp = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      if (tasks.includes(taskInput.trim())) {
        setError("Tarea existente");
      } else {
        dispatch(addTask(taskInput.trim()));
        setTaskInput("");
        setError("");
      }
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
            <DeleteButtonStyled onClick={() => dispatch(removeTask(task))}>
              Eliminar
            </DeleteButtonStyled>
          </TaskItemStyled>
        ))}
      </TaskListStyled>

      {tasks.length > 0 && (
        <ClearButtonStyled onClick={() => dispatch(clearTasks())}>
          Eliminar todas las tareas
        </ClearButtonStyled>
      )}
    </TaskContainerStyled>
  );
};

export default TaskApp;
