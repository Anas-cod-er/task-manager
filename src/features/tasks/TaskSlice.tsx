import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task{
    id: string;
    title: string;
    completed :boolean;
}

interface TaskState{
    tasks: Task[];
}

const initialState: TaskState ={
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) =>{
            const newTask: Task ={
                id: Date.now().toString(),
                title: action.payload,
                completed: false,
            };
            state.tasks.push(newTask);
        },
    },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;