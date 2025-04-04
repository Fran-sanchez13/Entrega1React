import {configureStore} from '@reduxjs/toolkit'
import tasksreducer from "./taskSlice"

const store = configureStore({
    reducer: {
        tasks: tasksreducer,
    },
}) //todo reducer

export default store