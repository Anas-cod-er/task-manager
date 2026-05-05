import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addTask } from '../../features/tasks/TaskSlice';

const AddTaskForm = () => {

    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        if(!title.trim()){
            alert("Task cannot be empty");
            return;
        }

        dispatch(addTask(title));
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="input input-bordered w-100px"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter task'
            />
            <button className="btn btn-primary">Add</button>
        </form>
    );
};

export default AddTaskForm;