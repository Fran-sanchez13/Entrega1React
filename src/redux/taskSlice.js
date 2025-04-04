import { createSlice } from "@reduxjs/toolkit";

// Cargar tareas desde LocalStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

// Guardar tareas en LocalStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("tasks", JSON.stringify(state));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeTask: (state, action) => {
      const newState = state.filter((task) => task !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    clearTasks: () => {
      saveToLocalStorage([]);
      return [];
    },
  },
});

export const { addTask, removeTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;

