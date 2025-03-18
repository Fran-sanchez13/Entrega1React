import TaskApp from "./components/TaskApp"
import { TaskProvider } from "./context/taskContext"

function App() {
  return(
    <TaskProvider>
          <TaskApp/>
    </TaskProvider>
  )
}

export default App
